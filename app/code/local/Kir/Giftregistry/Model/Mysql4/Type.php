<?php

class Kir_Giftregistry_Model_Mysql4_Type extends Mage_Core_Model_Mysql4_Abstract
{
    public function _construct()
    {
        $this->_init('kir_giftregistry/type', 'type_id');
    }
}