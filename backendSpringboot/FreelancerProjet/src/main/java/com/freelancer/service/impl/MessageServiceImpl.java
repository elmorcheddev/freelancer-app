package com.freelancer.service.impl;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.freelancer.model.Message;
import com.freelancer.model.Utilisateurs;
import com.freelancer.model.Utilisateurs;
import com.freelancer.repository.MessageRepository;
import com.freelancer.repository.UtilisateursRepo;
import com.freelancer.service.MessageService;
import com.freelancer.service.UtilisateurServices;
 
 
 @Service
public class MessageServiceImpl implements MessageService{

	@Autowired
	private UtilisateursRepo UtilisateursService;
	@Autowired
	private MessageRepository messageRepo;
	@Override
	public Message sendMessage(Message message) {
		Utilisateurs sendToUtilisateurs = UtilisateursService.findById(message.getSender().getId()).get();
		Utilisateurs receptUtilisateurs = UtilisateursService.findById(message.getRecipient().getId()).get();
		message.setSender(sendToUtilisateurs);
		message.setRecipient(receptUtilisateurs);
		message.setContent(message.getContent());
		message.setTimestamp(new Date());
		return messageRepo.save(message);
	}
	
	



	@Override
	public List<Message> allMsg() {
		// TODO Auto-generated method stub
		return messageRepo.findAll();
	}





	@Override
public	List<Message> findByRecipientAndSender(Utilisateurs  sender , Utilisateurs recipient )
	{
		
	 return messageRepo.findBySenderAndRecipient(sender, recipient);
		
	}





	@Override
	public List<Message> findBySenderAndRecipient(Utilisateurs sender, Utilisateurs recipient) {
		// TODO Auto-generated method stub
		return messageRepo.findByRecipientAndSenderOrderByTimestamp(recipient, sender);
	}





	@Override
	public List<Message> findByRecipient(Utilisateurs recipient) {
		// TODO Auto-generated method stub
		return messageRepo.findByRecipient(recipient);
	}





}
