<?php

namespace App\SmartContent;

use Sulu\Bundle\ContactBundle\Entity\ContactRepositoryInterface;
use Sulu\Component\Content\Compat\StructureManagerInterface;
use Sulu\Component\Content\Extension\ExtensionManagerInterface;
use Sulu\Component\Content\SmartContent\QueryBuilder;
use Sulu\Component\PHPCR\SessionManager\SessionManagerInterface;

class DatePageQueryBuilder extends QueryBuilder
{
    public function __construct(
        StructureManagerInterface          $structureManager,
        ExtensionManagerInterface          $extensionManager,
        SessionManagerInterface            $sessionManager,
                                           $languageNamespace,
        private ContactRepositoryInterface $contactRepository
    )
    {
        parent::__construct($structureManager, $extensionManager, $sessionManager, $languageNamespace);
    }

    protected function buildOrder($webspaceKey, $locale)
    {
        $sql2Order[] = 'page.[i18n:' . $locale . '-date] ' . 'ASC';
        return \implode(', ', $sql2Order);
    }
}