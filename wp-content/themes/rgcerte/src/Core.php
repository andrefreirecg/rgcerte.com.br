<?php
namespace Makersolucoes\Theme;

use Carbon_Fields\Carbon_Fields;

class Core extends Loader
{
	public function __construct()
	{
		add_action('after_setup_theme', [&$this, 'init' ]);
		/**
		 * Array of Controller Class
		 */
		$controllers = [
			'EnqueueScripts',
			'ThemeOptionsController',
			'BlocksController'
		];

		$this->loadControllers($controllers);
	}

	public function init()
	{
		Carbon_Fields::boot();
	}
}
