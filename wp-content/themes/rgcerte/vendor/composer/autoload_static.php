<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInitc8426132527f1396c656afb25771fa32
{
    public static $prefixLengthsPsr4 = array (
        'S' => 
        array (
            'SlevomatCodingStandard\\' => 23,
        ),
        'P' => 
        array (
            'PHPStan\\PhpDocParser\\' => 21,
            'PHPCSStandards\\Composer\\Plugin\\Installers\\PHPCodeSniffer\\' => 57,
        ),
        'N' => 
        array (
            'NeutronStandard\\' => 16,
        ),
        'M' => 
        array (
            'Makersolucoes\\Theme\\' => 20,
        ),
        'C' => 
        array (
            'Composer\\Installers\\' => 20,
            'Carbon_Fields\\' => 14,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'SlevomatCodingStandard\\' => 
        array (
            0 => __DIR__ . '/..' . '/slevomat/coding-standard/SlevomatCodingStandard',
        ),
        'PHPStan\\PhpDocParser\\' => 
        array (
            0 => __DIR__ . '/..' . '/phpstan/phpdoc-parser/src',
        ),
        'PHPCSStandards\\Composer\\Plugin\\Installers\\PHPCodeSniffer\\' => 
        array (
            0 => __DIR__ . '/..' . '/dealerdirect/phpcodesniffer-composer-installer/src',
        ),
        'NeutronStandard\\' => 
        array (
            0 => __DIR__ . '/..' . '/automattic/phpcs-neutron-standard/NeutronStandard',
        ),
        'Makersolucoes\\Theme\\' => 
        array (
            0 => __DIR__ . '/../..' . '/src',
        ),
        'Composer\\Installers\\' => 
        array (
            0 => __DIR__ . '/..' . '/composer/installers/src/Composer/Installers',
        ),
        'Carbon_Fields\\' => 
        array (
            0 => __DIR__ . '/..' . '/htmlburger/carbon-fields/core',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInitc8426132527f1396c656afb25771fa32::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInitc8426132527f1396c656afb25771fa32::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInitc8426132527f1396c656afb25771fa32::$classMap;

        }, null, ClassLoader::class);
    }
}
