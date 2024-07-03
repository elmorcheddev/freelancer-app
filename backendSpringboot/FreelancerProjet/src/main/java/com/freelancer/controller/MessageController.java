package com.freelancer.controller;

 import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
 import org.springframework.web.bind.annotation.RestController;

import com.freelancer.model.Message;
import com.freelancer.model.Utilisateurs;
import com.freelancer.repository.UtilisateursRepo;
import com.freelancer.service.*;
 

 
@RestController
@RequestMapping(value = "/api/message")
public class MessageController {
 
	@Autowired
	private MessageService messageService;
	@Autowired
	private UtilisateursRepo utilisateurService; 
@PostMapping(value = "/send")
public Message sendMessage(@RequestBody Message message) {
	return messageService.sendMessage(message);
}
@GetMapping(value = "/list/{idadmin}/{iduser}")
public List<Message> AllMessage(@PathVariable("iduser") Long iduser
					,@PathVariable("idadmin") Long idadmin) 
{
	Utilisateurs recepter=utilisateurService.findById(iduser).get();
	Utilisateurs sender=utilisateurService.findById(idadmin).get();
	return messageService.findByRecipientAndSender(recepter, sender);	


}
@GetMapping(value = "/listuser/{iduser}/{idadmin}")
public List<Message> AllUserMessage(@PathVariable("iduser") Long iduser
					,@PathVariable("idadmin") Long idadmin) 
{	Utilisateurs recepter=utilisateurService.findById(iduser).get();
Utilisateurs sender=utilisateurService.findById(idadmin).get();
	return messageService.findBySenderAndRecipient(sender, recepter);	


}
@GetMapping(value = "myMessage/{id}")
public List<Message> findByRecipient(@PathVariable Long id) {
		Utilisateurs recipient = utilisateurService.findById(id).get();
	return messageService.findByRecipient(recipient);
}
}