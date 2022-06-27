--Trabalho final de Banco de Dados
--Alunos: Márcio

/*1. Criar o banco um novo banco de dados e elaborar as tabelas, definindo chave primária, chave secundária e 
relacionamentos. Para os campos chave primária de cada tabela definir como Identity (autonumeração).*/

create database TrabalhoFinal

use TrabalhoFinal

create table ALUNOS (RA int not null identity(1,1),
					NOME varchar(100), CIDADE varchar(40))

select * from ALUNOS

alter table ALUNOS add constraint pk_ALUNO
				primary key (RA)

create table historico (codigohistorico int not null identity(1,1),
						semestre int, faltas int, nota float)

alter table historico add constraint pk_historico
					primary key (codigohistorico)

create table DISCIPLINA (disciplina varchar(100), cargahoraria float)

alter table DISCIPLINA add codigodiscipina int not null identity(1,1)

alter table DISCIPLINA drop column codigodiscipina

alter table DISCIPLINA add codigodisciplina int not null identity(1,1)

alter table DISCIPLINA add constraint pk_DISCIPLINA
					primary key (codigodisciplina)

create table professor (codigoprofessor int not null identity(1,1),
						cidade varchar(40))

alter table professor add nome varchar(100)

alter table professor drop column cidade

alter table professor add cidade varchar(40)

alter table professor add constraint pk_professor
					primary key (codigoprofessor)

alter table historico add RA int, codigodisciplina int, codigoprofessor int

alter table historico add constraint fk_historico_RA
					foreign key (RA)
					references ALUNOS (RA)

alter table historico add constraint fk_historico_codigodisciplina
					foreign key (codigodisciplina)
					references DISCIPLINA (codigodisciplina)

alter table historico add constraint fk_historico_codigoprofessor
					foreign key (codigoprofessor)
					references professor (codigoprofessor)

alter table historico drop column semestre,faltas,nota

alter table historico add semestre int,faltas int, nota float 

/*2. Inserir informações em todas as tabelas (10 alunos, 4 disciplinas - Banco de dados, Sistemas Operacionais, 
Rede de Computadores e Estrutura de dados, 3 professores e 15 históricos)*/

insert into ALUNOS values ('Amanda','Mogi-Guaçu'),
						  ('Bruno','Conchal'),
						  ('Carol','Mogi-Mirim'),
						  ('Dayane','Itapira'),
						  ('Diego','Mogi-Guaçu'),
						  ('Guilherme','Mogi-Guaçu'),
						  ('Lucas','Mogi-Mirim'),
						  ('Lucinda','Mogi-Guaçu'),
						  ('Mariana','Mogi-Guaçu'),
						  ('Nayara','Mogi-Mirim')

select * from ALUNOS

insert into DISCIPLINA values ('Banco de Dados', 80),
							  ('Sistemas operacionais', 80),
							  ('Rede de Computadores', 80),
							  ('Estrutura de Dados', 60)

select * from DISCIPLINA

insert into professor values ('Sandro','Mogi-Mirim'),
							 ('Rita','Mogi-Mirim'),
							 ('Navas','Mogi-Guaçu')

select * from professor

insert into historico values (4,1,1,2,5,4.0),(6,1,1,2,8,3.0),
							 (1,2,1,1,5,6.0),(1,2,1,1,8,7.0),
							 (10,3,1,1,5,6.0),(1,4,1,2,6,7.0),
							 (2,1,1,3,4,7.0),(2,2,1,3,3,8.0),
							 (2,1,1,1,5,6.5),(3,1,1,1,5,5.0),
							 (4,1,1,1,3,8.0),(5,1,1,1,3,8.0),
							 (6,1,1,1,3,5.0),(7,1,1,1,3,6.0),
							 (9,1,1,1,5,6.0),(8,1,1,1,3,9.0),
							 (1,1,1,1,3,9.0)

select * from historico

/*3. Encontre o nome e RA dos alunos com nota na disciplina de Banco de Dados no 2º semestre menor que 5.*/
select h.RA, a.NOME
from historico h, ALUNOS a
where (h.codigodisciplina = 1 and h.semestre = 2 and nota < 5 and h.ra = a.RA) 

/*4. Alterar a tabela histórico e incluir um campo inteiro chamado ano, com o objetivo de armazenar o ano e 
semestre do registro de histórico dos alunos*/
alter table historico add ano int
/*5. Alterar a tabela de histórico definindo o ano para cada um dos registros de histórico da tabela. */
update historico set ano=2022 where ra=1;

update historico set ano=2021 where ra=2;

update historico set ano=2021 where ra=3;

update historico set ano=2022 where ra=4;

update historico set ano=2020 where ra=6;

update historico set ano=2022 where ra=7;

update historico set ano=2021 where ra=8;
--dando update no codigoprofessor também pois percebi que havia colocado somente o professor 1 em todos os registros
update historico set ano=2020, codigoprofessor=3 where ra=9;

update historico set ano=2020, codigoprofessor=2 where ra=10;
/*6. Apresente o nome dos professores de Banco de dados que ministraram aulas em 2020*/
select p.nome
from professor p, historico h
where (h.ano=2020 and p.codigoprofessor=h.codigoprofessor);
/*7. Apresente a quantidade e nome das disciplinas que cada professor ministrou em de 2020.*/
select count(h.codigodisciplina) as qtd, d.disciplina, p.nome
from professor p, disciplina d, historico h
where (h.ano=2020 and d.codigodisciplina=h.codigodisciplina and p.codigoprofessor=h.codigoprofessor)
group by d.disciplina, h.codigodisciplina, p.nome 
--update semestres q estavam maior que 2 e após adcionar o ano não fazem mais sentido, update not aluno porque originalmente poucos tiraram nota<5
update historico set semestre=1 where semestre>2;
update historico set nota=3, ano=2020 where RA=1;
/*8. Encontre o nome, cidade dos alunos, código das disciplinas e nome da disciplina onde os alunos tiveram nota 
menor que 5 no 1º semestre de 2020*/
select a.NOME, a.CIDADE, d.codigodisciplina, d.disciplina
from ALUNOS a, DISCIPLINA d, historico h
where (h.ano=2020 and d.codigodisciplina=h.codigodisciplina and h.semestre=1 and h.ra=a.RA and h.nota<5)

--update pq originalmente não havia colocado o ano de 2019
update historico set ano=2019 where ano=2021 or ano=2022
/*9. Apresente o nome e RA dos alunos que frequentaram a disciplina de Estrutura de Dados com o professor 
Marcos em 2019*/
--update porque nenhum item preenchia o critério
update professor set nome='Marcos' where nome='Navas'

update historico set codigoprofessor=3, codigodisciplina=4 where RA=5

select a.nome, a.RA, d.disciplina, p.nome
from ALUNOS a, DISCIPLINA d, professor p, historico h
where (h.ano=2019 and d.codigodisciplina=4 and p.nome='Marcos' and h.RA=a.RA and d.codigodisciplina=h.codigodisciplina)
/*10. Apresentar o histórico escolar do aluno Alex com informações do seu RA, nome, disciplinas, faltas, nota, ano 
e semestre*/
update ALUNOS set NOME='Alex' where nome='Amanda'
select a.nome, a.RA, d.disciplina, h.faltas, h.nota, h.ano, h.semestre
from ALUNOS a, DISCIPLINA d, historico h
where(a.NOME='Alex' and d.codigodisciplina=h.codigodisciplina and a.RA=h.RA)
/*11. Encontre o nome dos professores que reside em Mogi Mirim.*/
select p.nome
from professor p
where (p.cidade='Mogi-Mirim')
/*12. Forneça o nome dos alunos e nome das disciplinas com carga horária menor que 60 horas. Apresentar nesta 
consulta o nome dos respectivos professores responsáveis pelas disciplinas. */
update DISCIPLINA set cargahoraria=40 where cargahoraria=60
select a.nome, d.disciplina, p.nome
from ALUNOS a, DISCIPLINA d, historico h, professor p
where (d.cargahoraria<60 and h.codigodisciplina=d.codigodisciplina and a.RA=h.RA)
/*13. Localize o nome dos professores que lecionaram matérias nas quais o aluno “Pedro Paulo Cunha” foi 
reprovado com nome inferior a < 5.*/
update ALUNOS set NOME='Pedro Paulo Cunha' where NOME='Lucas'
update historico set nota=4 where RA=7
select p.nome, d.disciplina
from professor p, DISCIPLINA d, historico h, ALUNOS a
where (a.NOME='Pedro Paulo Cunha' and h.nota<5 and a.RA=h.RA and d.codigodisciplina=h.codigodisciplina and p.codigoprofessor=h.codigoprofessor)
/*14. Apresente o RA e nome dos alunos dos alunos que frequentaram disciplinas lecionadas pelo prof. Sandro.*/
select distinct a.RA, a.Nome
from ALUNOS a, historico h, professor p
where (p.nome='Sandro' and a.RA=h.RA and p.codigoprofessor=h.codigoprofessor)
/*15. Encontre o Ra, nome e média das notas dos alunos que cursaram todas as matérias lecionadas por 
professores de Mogi Mirim*/
select a.RA, a.Nome, d.disciplina, AVG(h.nota) as Media
from ALUNOS a, professor p, historico h, DISCIPLINA d
where (a.RA = h.RA and p.codigoprofessor = h.codigoprofessor and d.codigodisciplina = h.codigodisciplina
and p.cidade = 'Mogi-Mirim')
group by a.NOME, a.RA, d.disciplina, h.Nota
/*16. Apresente o número de alunos que fizeram Banco de dados e estrutura de dados em 2020 no primeiro 
semestre.*/
select count(h.codigodisciplina)
from historico h
where(ano=2020 and codigodisciplina=4 and codigodisciplina=1 and semestre=1)
/*17. Apresente a média de notas por disciplina. Ordenar o resultado por média decrescente.*/
select d.disciplina, avg(h.nota)
from DISCIPLINA d left join historico h on d.codigodisciplina=h.codigodisciplina
where 1=1
group by d.disciplina
order by avg(h.nota) desc
/*18. Apresentar o nome do aluno, cidade, código das disciplinas e nome da disciplina onde os alunos tiveram nota 
superior a 5 no 1º semestre de 2020. Ordenar o resultado por nome da disciplina. */
select a.nome, a.cidade, h.codigodisciplina, d.disciplina
from ALUNOS a, historico h, DISCIPLINA d
where (h.nota>5 and h.semestre=1 and h.ano=2020 and a.RA=h.RA and d.codigodisciplina=h.codigodisciplina)
order by d.disciplina
/*19. Apresente o histórico escolar do aluno de nome Alex. A consulta deve apresentar seu RA, nome, a lista de 
disciplinas que ele já cursou contendo o código e nome da disciplina, faltas, nota, ano e semestre.*/
select a.RA, a.Nome, d.disciplina, d.codigodisciplina, h.faltas, h.nota, h.ano, h.semestre
from ALUNOS a, DISCIPLINA d, historico h
where (a.NOME='Alex' and a.RA=h.RA and d.codigodisciplina=h.codigodisciplina)
/*20. Apresente a quantidade que o aluno “José da Silva” cursou a disciplina de Banco de Dados.*/
update ALUNOS set NOME='José da Silva' where NOME='Bruno'
select count(a.NOME)
from ALUNOS a, historico h
where (a.NOME='José da Silva' and h.codigodisciplina=1 and a.RA=h.RA)
/*21. Apresentar a quantidade de alunos cursaram a disciplina de Banco de Dados em 2019 e 2020.*/
select count(h.codigodisciplina)
from historico h
where (h.codigodisciplina=1 and h.ano=2019 or h.ano=2020 and h.codigodisciplina=1)
/*22. Insira todos os alunos da disciplina de BD (Banco de Dados) em 2019 e que tiveram nota > 5, cursando a 
disciplina TBD (Tópicos em Banco de Dados) em 2018 com o mesmo professor, mas com frequência e nota 
desconhecidas (nulo).
*/
insert into DISCIPLINA values ('Tópicos em Banco de Dados', 60)
insert into historico (RA)
select RA, codigoprofessor
from	historico
where (codigodisciplina=1 and ano=2019)
update historico set ano=2018 where ano is null
update historico set codigodisciplina=5 where codigodisciplina is null
--tentar fazer depois
/*23. Altere as notas dos alunos de Banco de Dados (BD) em 2019 com o professor Sandro através da seguinte 
regra: A- notas entre [4.0 e 5.0] devem ser alteradas para 4.0. B - notas entre [5.0 e 9.5] terão acréscimo de 
0.5 e C - Notas acima de 9.5, inclusive, ficarão com 10.0*/
update historico set nota=4 where nota>=4 and nota<5 and codigodisciplina=1
update historico set nota=(nota+0.5) where nota>=5 and nota<=9.5 and codigodisciplina=1
/*24. Apresente uma consulta com o nome do aluno, nome da disciplina, faltas, notas e uma informação de 
“reprovado” ou aprovado com base na sua nota. Nota superior ou igual a 7,0 deve considerar o resultado de 
“aprovado” e caso contrário “reprovado”*/
select a.NOME, d.disciplina, h.faltas, h.nota,
case when (h.nota>=7) then 'Aprovado'
else 'Reprovado'
end as 'Status'
from AlUNOS a, DISCIPLINA d, historico h
where (a.RA=h.RA and d.codigodisciplina=h.codigodisciplina)
/*25. Apresente como resultado a média dos alunos por disciplina somente dos alunos que foram reprovados, ou 
seja, apresentem média inferior a 5,0*/
select d.disciplina, avg(h.nota) as 'Media'
from DISCIPLINA d inner join historico h 
on h.codigodisciplina=d.codigodisciplina and h.nota<5 
group by d.disciplina
order by 'Media' desc
/*26. Apresente o comando SQL necessário para acrescentar 0,5 pontos a todas as notas da disciplina de banco 
de dados cadastrado no banco, independente do aluno*/
update historico set nota=(nota+0.5) where nota<10 and codigodisciplina=1
/*27. Considere a necessidade de normalizar o banco de dados. Observa-se que o campo “cidade” na tabela 
ALUNOS não atende às formas normais. Desta forma, apresentar quais comandos Sql devem ser 
apresentados na sequência com objetivo de:
a. Criar uma tabela nova denominada CIDADE e transferir o campo “cidade” da tabela Alunos para esta 
nova tabela sem repetir as informações dos registros; 
b. Criar uma chave primária identity para esta nova tabela; 
c. Criar um campo chave estrangeira na tabela Alunos e relacionar com a chave primária da tabela 
CIDADE. 
d. Preencher o campo de chave estrangeira da tabela Alunos com o código novo da tabela de CIDADE 
levando em consideração o conteúdo das informações do campo cidade da tabela Alunos. 
e. Excluir o campo cidade da tabela aluno. */
--a
create table CIDADE (cidade varchar (40))
insert into CIDADE
select CIDADE
from ALUNOS
--b
alter table CIDADE add codigocidade int not null identity(1,1)
alter table CIDADE add constraint pk_CIDADE
					primary key (codigocidade)
--c
alter table ALUNOS add codigocidade int
alter table ALUNOS add constraint fk_ALUNOS_codigocidade
					foreign key (codigocidade)
					references CIDADE (codigocidade)
--d
alter table ALUNOS drop column CIDADE
select * from CIDADE











