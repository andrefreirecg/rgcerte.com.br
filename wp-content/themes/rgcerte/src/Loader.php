<?php

namespace Makersolucoes\Theme;

use ReflectionClass;

abstract class Loader
{

    /*
     * List of controllers.
     */
    protected array $listClass = [];

	/**
	 * Get namespace this class.
	 *
	 * @return string
	 */
	public function getNamespace(): string
    {
		return (new ReflectionClass($this))->getNamespaceName();
	}

	/**
	 * Prepare the item for the REST response.
	 *
	 * @param array $controllers list of controllers.
	 */
	public function loadControllers(array $controllers): void
	{
		$namespace = $this->getNamespace();
		foreach ($controllers as $name) {
			$this->listClass[] = $this->handleInstance(sprintf("{$namespace}\Controller\%s", $name));
		}
	}

	/**
	 * Create instance of controllers.
	 *
	 * @param string $class class name.
     *
     * @return string
	 */
	private function handleInstance(string $class): object
    {
        $newClass = null;
        if (class_exists($class)) {
            $newClass =  new $class();
        }

        return $newClass;
    }
}
