<?php

namespace Makersolucoes\Theme\Controller;

class BlocksController
{
	public $paths = [];

	public function __construct()
	{
		add_filter("should_load_separate_core_block_assets", "__return_true");
		add_action("after_setup_theme", [&$this, 'setup']);
		add_filter('block_categories_all', [&$this, 'addCategoryBlocksGutenberg'], 10, 2);
	}

	public function addCategoryBlocksGutenberg($blockCategories)
	{
		array_unshift(
			$blockCategories,
			[
				'slug'  => 'ms_blocks',
				'title' => __('MS Blocks', 'rgcerte'),
				'icon'  => null,
			]
		);
		return $blockCategories;
	}

	public function setup()
	{
		$distBlocks = get_theme_file_path('/dist/blocks');

		$folders = $this->getFolders($distBlocks);

		$this->arrayFlat($folders);

		$this->registerAllBlocks();

	}

	public function getFolders($path)
	{
		$folderPaths = [];
		$folderTemp = '';

		if (file_exists($path)) {
			$foldersOrFile =  array_diff(scandir($path), array('.', '..'));

			foreach ($foldersOrFile as $folder_or_file) {
				$folderTemp = $path . DIRECTORY_SEPARATOR . $folder_or_file;

				if (is_dir($folderTemp)) {
					$folderPaths[] = $folderTemp;
					$isFolder =  $this->getFolders($folderTemp);

					if (!empty($isFolder)) {
						$folderPaths[] = $isFolder;
					}
				}
			}
		}
		return $folderPaths;
	}


	public function arrayFlat($paths)
	{

		if (!is_array($paths)) {
			$this->paths[] = $paths;
			return;
		}

		foreach ($paths as $path) {
			if (is_array($path) && count($path) === 1 && gettype($path[0]) === 'string') {
				$this->paths[] = $path[0];
			} elseif (is_array($path)) {
				$this->arrayFlat($path);
			} else {
				$this->paths[] = $path;
			}
		}
	}

	public function registerAllBlocks()
	{
		foreach ($this->paths as $path) {
			add_action("init", function () use ($path) {
				register_block_type(
					$path
				);
			});
		}
	}

}
