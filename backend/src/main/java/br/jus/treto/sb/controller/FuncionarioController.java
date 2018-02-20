package br.jus.treto.sb.controller;

import java.util.Arrays;
import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.jus.treto.sb.entidade.Funcionario;
import br.jus.treto.sb.repository.FuncionarioRepository;

@RestController
@RequestMapping("/funcionarios")
public class FuncionarioController {
	
	@Autowired
	FuncionarioRepository funcionarioRepository;
	
	@GetMapping("/{nome}")
	List<String> olah(@PathVariable String nome) {
		return Arrays.asList("Michael", "Robson", "Franck", nome);
	}
	
	@GetMapping
	Iterable<Funcionario> buscarTodos() {
		return funcionarioRepository.findAll();
	}
	
	@PostMapping
	void inserir(@RequestBody @Valid Funcionario f) {
		funcionarioRepository.save(f);
	}

}
