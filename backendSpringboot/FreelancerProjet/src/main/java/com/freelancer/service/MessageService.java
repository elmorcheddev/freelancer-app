package com.freelancer.service;

import java.util.List;

import com.freelancer.model.Message;
import com.freelancer.model.Utilisateurs;

 
public interface MessageService {

	Message sendMessage(Message message);
	List<Message> allMsg();
	List<Message> findByRecipientAndSender(Utilisateurs  recipient , Utilisateurs sender);
    List<Message> findBySenderAndRecipient(Utilisateurs  sender, Utilisateurs  recipient );
    List<Message> findByRecipient(Utilisateurs recipient);

	}
