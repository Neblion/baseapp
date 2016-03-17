<?php

namespace AppBundle\Command;

use Symfony\Bundle\FrameworkBundle\Command\ContainerAwareCommand;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Output\OutputInterface;
use AppBundle\Entity\Account;

class TestCommand extends ContainerAwareCommand
{
    protected function configure()
    {
        $this
            ->setName('nblbaseapp:test')
            ->setDescription('Greet someone')
        ;
    }

    
    protected function execute(InputInterface $input, OutputInterface $output)
    {
        $output->writeln('Test');
        
        $user = new Account();
        $user->setUsername('admin');
        $user->setEmail('thomas.bibard@neblion.net');
        $plainPassword = 'nblapp42';
        $encoder = $this->getContainer()->get('security.password_encoder');
        $encoded = $encoder->encodePassword($user, $plainPassword);
        $user->setPassword($encoded);

        $em = $this->getContainer()->get('doctrine')->getEntityManager();
        $em->persist($user);
        $em->flush();
        
    }
}

