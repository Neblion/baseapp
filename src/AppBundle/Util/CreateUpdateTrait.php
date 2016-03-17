<?php

namespace AppBundle\Util;

use AppBundle\Entity\Account;

trait CreateUpdateTrait
{
    /**
     * @var Account $creator
     *
     * @Gedmo\Blameable(on="create")
     * @ORM\ManyToOne(targetEntity="Account")
     * @ORM\JoinColumn(name="creator_id", referencedColumnName="id")
     */
    private $creator;
    
    /**
     * @var \DateTime $created
     *
     * @Gedmo\Timestampable(on="create")
     * @ORM\Column(type="datetime")
     */
    private $created;
    
    /**
     * @var Account $creator
     *
     * @Gedmo\Blameable(on="update")
     * @ORM\ManyToOne(targetEntity="Account")
     * @ORM\JoinColumn(name="updater_id", referencedColumnName="id")
     */
    private $updater;
    
    /**
     * @var \DateTime $updated
     *
     * @Gedmo\Timestampable(on="update")
     * @ORM\Column(type="datetime")
     */
    private $updated;

    /**
     * Get creator
     *
     * @return Account
     */
    public function getCreator()
    {
        return $this->creator;
    }
    
    public function getCreated()
    {
        return $this->created;
    }
    
    /**
     * Get updater
     *
     * @return Account
     */
    public function getUpdater()
    {
        return $this->updater;
    }
    
    public function getUpdated()
    {
        return $this->updated;
    }
}