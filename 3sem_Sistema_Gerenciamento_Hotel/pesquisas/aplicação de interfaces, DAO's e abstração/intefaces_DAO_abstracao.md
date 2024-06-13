# Copilot ensina:

## Generics
Claro, posso te ajudar com isso!

O uso de chaves `<>` em Java é conhecido como **Generics**. Generics permitem que tipos (classes e interfaces) sejam parâmetros ao definir classes, interfaces e métodos. Muito parecido com os parâmetros de método que você pode passar valores para um método, você pode passar tipos para uma classe, interface ou método com generics. Isso permite que você crie código que é seguro e também fácil de ler.

No seu exemplo, `IDAO<T extends AbstractEntity>` é uma interface genérica. Aqui, `T` é um tipo de parâmetro que será substituído por um tipo real quando um objeto da interface `IDAO` é criado.

A parte `T extends AbstractEntity` significa que qualquer tipo que substitua `T` deve ser ou estender a classe `AbstractEntity`. Isso é conhecido como **limites de tipo**. Aqui, `AbstractEntity` é o limite superior de `T`.

Então, quando você vê algo como:

```java
public class LivroDAO implements IDAO<Livro> {
    // implementação dos métodos
}
```

Isso significa que a classe `LivroDAO` está implementando a interface `IDAO` para o tipo `Livro`. Aqui, `Livro` é uma classe que estende `AbstractEntity`. E todos os métodos na classe `LivroDAO` que vêm da interface `IDAO` usarão `Livro` como seu tipo. Por exemplo, o método `cadastrar` na classe `LivroDAO` terá a seguinte aparência:

```java
public void cadastrar(Livro livro) {
    // implementação do método
}
```

### Se não implementarmos Generics
Se você não implementar Generics, seu código ainda funcionará, mas você perderá os benefícios que os Generics oferecem. Aqui estão algumas coisas que podem acontecer:

1. **Perda de verificação de tipo em tempo de compilação**: Sem Generics, todas as suas verificações de tipo seriam feitas em tempo de execução, o que poderia levar a erros que só seriam descobertos quando o programa estiver sendo executado. Com Generics, muitos desses erros podem ser detectados em tempo de compilação.

2. **Necessidade de conversões de tipo (casting)**: Sem Generics, quando você recupera um objeto de uma coleção, você teria que converter (cast) explicitamente para o tipo de objeto que você sabe que está armazenado na coleção. Com Generics, a necessidade de casting é eliminada e o código se torna mais limpo.

3. **Risco de problemas de ClassCastException**: Se o seu código tentar converter um objeto para um tipo incompatível, ele lançará um `ClassCastException` em tempo de execução. Com Generics, como as verificações de tipo são feitas em tempo de compilação, o risco de encontrar esse tipo de exceção é muito reduzido.

Portanto, embora seja possível escrever código sem Generics, o uso de Generics torna o código mais seguro e mais legível, reduzindo a probabilidade de erros em tempo de execução e eliminando a necessidade de casting.

## Utilizando AbstractEntity

A classe `AbstractEntity` é geralmente usada para definir campos que são comuns a todas as entidades no seu sistema. Aqui estão alguns exemplos do que você pode incluir:

1. **ID**: Um campo de identificação único (como `id`) que é comum a todas as entidades.

```java
private int id;
```

2. **Data de Criação e Atualização**: Campos para rastrear quando a entidade foi criada e quando foi atualizada pela última vez.

```java
private Date createdAt;
private Date updatedAt;
```

3. **Métodos comuns**: Qualquer método que seria útil para todas as entidades, como getters e setters para os campos acima, ou qualquer outro método de utilidade geral.

```java
public int getId() {
    return id;
}

public void setId(int id) {
    this.id = id;
}

public Date getCreatedAt() {
    return createdAt;
}

public void setCreatedAt(Date createdAt) {
    this.createdAt = createdAt;
}

public Date getUpdatedAt() {
    return updatedAt;
}

public void setUpdatedAt(Date updatedAt) {
    this.updatedAt = updatedAt;
}
```

Lembre-se, a ideia de uma classe abstrata como `AbstractEntity` é fornecer um lugar para colocar código que é comum a várias classes, para promover a reutilização de código e manter o código organizado.

## IDAO em Sistema de Gerenciamento de Reservas de Hoteis
### Aplicando IDAO com existencia de classes abstratas AbstracEntity, Pessoa, Quarto e Reserva

A abstração que você está planejando parece muito boa! Você pode continuar a usar a interface `IDAO<T extends AbstractEntity>` para suas classes DAO. Aqui estão algumas sugestões:

1. **Classe Pessoa**: Como você mencionou, você pode criar uma classe abstrata `Pessoa` que estende `AbstractEntity`. Então, `Funcionario` e `Hospede` podem estender `Pessoa`. Você pode ter um `IDAO<Pessoa>` para operações CRUD comuns a todas as pessoas.

```java
public abstract class Pessoa extends AbstractEntity {
    // campos comuns a Funcionarios e Hospedes
}

public class Funcionario extends Pessoa {
    // campos específicos de Funcionario
}

public class Hospede extends Pessoa {
    // campos específicos de Hospede
}

public interface IPessoaDAO<T extends Pessoa> extends IDAO<T> {
    // métodos adicionais específicos para Pessoa
}
```

2. **Classe Quarto**: Similarmente, você pode ter uma classe abstrata `Quarto` que estende `AbstractEntity`, e `QuartoSolteiro` e `QuartoCasal` podem estender `Quarto`. Você pode ter um `IDAO<Quarto>` para operações CRUD comuns a todos os quartos.

```java
public abstract class Quarto extends AbstractEntity {
    // campos comuns a QuartoSolteiro e QuartoCasal
}

public class QuartoSolteiro extends Quarto {
    // campos específicos de QuartoSolteiro
}

public class QuartoCasal extends Quarto {
    // campos específicos de QuartoCasal
}

public interface IQuartoDAO<T extends Quarto> extends IDAO<T> {
    // métodos adicionais específicos para Quarto
}
```

3. **Classe Reserva**: Para a classe `Reserva`, você pode ter um `IDAO<Reserva>`.

```java
public class Reserva extends AbstractEntity {
    // campos de Reserva
}

public interface IReservaDAO extends IDAO<Reserva> {
    // métodos adicionais específicos para Reserva
}
```

Lembre-se, a ideia de usar Generics e interfaces é promover a reutilização de código e manter o código limpo e organizado.

### Pode usar apenas IDAO e não granular os tipos de IDAO?
Sim, se todas as suas entidades compartilham exatamente os mesmos métodos CRUD, você pode simplesmente usar a interface `IDAO<T extends AbstractEntity>`. Isso simplifica o seu código e evita a duplicação desnecessária.

No entanto, a razão pela qual você pode querer ter interfaces como `IPessoaDAO`, `IReservaDAO` e `IQuartoDAO` é se você antecipa que essas classes podem ter operações específicas além das operações CRUD básicas no futuro. Por exemplo, a classe `Reserva` pode ter um método `buscarPorData` que não é relevante para `Pessoa` ou `Quarto`.

Então, em resumo, se você tem certeza de que todas as suas classes DAO terão exatamente os mesmos métodos, usar apenas `IDAO` é uma boa ideia. Mas se você acha que pode precisar de métodos específicos para diferentes classes DAO no futuro, pode ser uma boa ideia manter as interfaces separadas.