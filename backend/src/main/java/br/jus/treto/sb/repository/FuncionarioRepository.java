package br.jus.treto.sb.repository;

import org.springframework.data.repository.PagingAndSortingRepository;

import br.jus.treto.sb.entidade.Funcionario;

public interface FuncionarioRepository extends PagingAndSortingRepository<Funcionario, Long> {
		
}
