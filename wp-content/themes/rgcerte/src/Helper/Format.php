<?php

namespace Makersolucoes\Theme\Helper;

class Format
{
    /**
     * Format CPF
     *
     * @param  string  $value
     * @return string
     */
    public static function cpf(string $value): string
    {
        $doc = preg_replace('/\D/', '', $value);
        return preg_replace('/(\d{3})(\d{3})(\d{3})(\d{2})/', '$1.$2.$3-$4', $doc);
    }

    /**
     * Format CNPJ
     *
     * @param  string  $value
     * @return string
     */
    public static function cnpj(string $value): string
    {
        $doc = preg_replace('/\D/', '', $value);
        return preg_replace('/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/', '$1.$2.$3/$4-$5', $doc);
    }

    /**
     * Format phone number
     *
     * @param  string  $number
     * @return string
     */
    public static function phone(string $number): string
    {
        $value = preg_replace('/\D/', '', $number);

        switch (strlen($value)) {
            case 11:
                return preg_replace('/(\d{4})(\d{3})(\d{4})/', '$1 $2 $3', $value);
            case 10:
                return preg_replace('/(\d{2})(\d{4})(\d{4})/', '($1) $2-$3', $value);
            default:
                return preg_replace('/(\d{4})(\d{4})/', '$1-$2', $value);
        }
    }

    /**
     * Format mobile phone
     *
     * @param  string  $number
     * @return string
     */
    public static function mobilePhone(string $number): string
    {
        $value = preg_replace('/\D/', '', $number);

        switch (strlen($value)) {
            case 11:
                $formated_number = preg_replace('/(\d{2})(\d{1})(\d{4})(\d{4})/', '($1) $2 $3-$4', $value);
                break;
            case 10:
                $formated_number = preg_replace('/(\d{2})(\d{4})(\d{4})/', '($1) $2-$3', $value);
                break;
            case 9:
                $formated_number = preg_replace('/(\d{1})(\d{4})(\d{4})/', '$1 $2-$3', $value);
                break;
            default:
                $formated_number = preg_replace('/(\d{4})(\d{4})/', '$1-$2', $value);
                break;
        }

        return $formated_number;
    }

    /**
     * Format date
     *
     * @param $timestamp
     * @return string
     */
    public static function date($timestamp): string
    {
        $day = date_i18n('d', $timestamp);
        $month = date_i18n('F', $timestamp);
        $year = date_i18n('Y', $timestamp);

        return "$day de $month de $year";
    }
}
