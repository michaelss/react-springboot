package br.jus.treto.sb.repository;

import org.springframework.data.repository.PagingAndSortingRepository;

import br.jus.treto.sb.entidade.Unidade;

public interface UnidadeRepository extends PagingAndSortingRepository<Unidade, Long> {
	
//	Iterable<Unidade> findBySigla(String sigla);
	
}
