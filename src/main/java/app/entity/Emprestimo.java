package app.entity;

import java.io.*;
import javax.persistence.*;
import java.util.*;
import javax.xml.bind.annotation.*;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonFilter;
import cronapi.rest.security.CronappSecurity;


/**
 * Classe que representa a tabela EMPRESTIMO
 * @generated
 */
@Entity
@Table(name = "\"EMPRESTIMO\"")
@XmlRootElement
@CronappSecurity
@JsonFilter("app.entity.Emprestimo")
public class Emprestimo implements Serializable {

  /**
   * UID da classe, necessário na serialização
   * @generated
   */
  private static final long serialVersionUID = 1L;

  /**
   * @generated
   */
  @Id
  @Column(name = "id", nullable = false, insertable=true, updatable=true)
  private java.lang.String id = UUID.randomUUID().toString().toUpperCase();

  /**
  * @generated
  */
  @Column(name = "NomeCliente", nullable = false, unique = false, insertable=true, updatable=true)
  
  private java.lang.String nomeCliente;

  /**
  * @generated
  */
  @Column(name = "Valor", nullable = false, unique = false, insertable=true, updatable=true)
  
  private java.lang.Double valor;

  /**
  * @generated
  */
  @Temporal(TemporalType.DATE)
  @Column(name = "Data", nullable = true, unique = false, insertable=true, updatable=true)
  
  private java.util.Date data;

  /**
   * Construtor
   * @generated
   */
  public Emprestimo(){
  }


  /**
   * Obtém id
   * return id
   * @generated
   */
  
  public java.lang.String getId(){
    return this.id;
  }

  /**
   * Define id
   * @param id id
   * @generated
   */
  public Emprestimo setId(java.lang.String id){
    this.id = id;
    return this;
  }

  /**
   * Obtém nomeCliente
   * return nomeCliente
   * @generated
   */
  
  public java.lang.String getNomeCliente(){
    return this.nomeCliente;
  }

  /**
   * Define nomeCliente
   * @param nomeCliente nomeCliente
   * @generated
   */
  public Emprestimo setNomeCliente(java.lang.String nomeCliente){
    this.nomeCliente = nomeCliente;
    return this;
  }

  /**
   * Obtém valor
   * return valor
   * @generated
   */
  
  public java.lang.Double getValor(){
    return this.valor;
  }

  /**
   * Define valor
   * @param valor valor
   * @generated
   */
  public Emprestimo setValor(java.lang.Double valor){
    this.valor = valor;
    return this;
  }

  /**
   * Obtém data
   * return data
   * @generated
   */
  
  public java.util.Date getData(){
    return this.data;
  }

  /**
   * Define data
   * @param data data
   * @generated
   */
  public Emprestimo setData(java.util.Date data){
    this.data = data;
    return this;
  }

  /**
   * @generated
   */
  @Override
  public boolean equals(Object obj) {
    if (this == obj) return true;
    if (obj == null || getClass() != obj.getClass()) return false;
    Emprestimo object = (Emprestimo)obj;
    if (id != null ? !id.equals(object.id) : object.id != null) return false;
    return true;
  }

  /**
   * @generated
   */
  @Override
  public int hashCode() {
    int result = 1;
    result = 31 * result + ((id == null) ? 0 : id.hashCode());
    return result;
  }

}
