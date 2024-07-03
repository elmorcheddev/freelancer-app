package com.freelancer.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

 import com.freelancer.model.Message;
import com.freelancer.model.Utilisateurs;

public interface MessageRepository extends JpaRepository<Message, Long>  {
    List<Message> findBySenderAndRecipient(Utilisateurs sender, Utilisateurs recipient);
    List<Message> findByRecipientAndSenderOrderByTimestamp(Utilisateurs recipient, Utilisateurs sender);
   List<Message> findByRecipient(Utilisateurs recipient);
}
