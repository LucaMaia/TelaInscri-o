import React from 'react'
import "../../App.css"

import logo from "../../images/Union.svg"
import Ornamento from "../../images/Ornament69.svg"
import Meleca1 from "../../images/Frame.svg"
import Meleca2 from "../../images/Meleca2.svg"
import Meleca3 from "../../images/meleca3.svg"
import Meleca4 from "../../images/meleca4.svg"
import Meleca5 from "../../images/meleca5.svg"
import Meleca7 from "../../images/meleca7.svg"


import Pendrive from "../../images/Pendrive.svg"
import BD from "../../images/bancodedados.svg"
import Image2 from "../../images/2.svg"
import Image3 from "../../images/3.svg"

import Error from "../../images/error.svg"

import Oculos from "../../images/oculos.svg"
import Image7 from "../../images/7.svg"
import Wifi from "../../images/wifi.svg"



function Header (props) {
    return(
        <div>
            <div className="mbox">
                <div className="hdr">
                    <img src={Ornamento} className="tela"/>

                    <img src={logo} className="logo"/>

                    <ul id="menu" className="menu">
                        <li><a href="#a-g4f">A G4F</a></li>
                        <li><a href="#perfis">Perfis</a></li>
                        <li><a href="#etapas">Etapas</a></li>
                        <li><a href="#beneficios">Benefícios</a></li>
                        <li><a href="#faq">FAQ</a></li>
                    </ul>
                </div>

                <div className="bnr">
                    <img src={Meleca1} className="meleca"/>

                        <div className="cpt"></div>
                        <div className="atn"></div>

                        <div className="txx">
                            <div className="mtx">Venha fazer parte do laboratório de inovação da G4F.</div>
                            <div className="sbx">
                                O programa trainee da G4f tem como principal objetivo selecionar e desenvolver jovens
                                com potencialidade de um futuro incrível , capazes de compor o nosso time de liderança
                                na equipe de engenharia de sofwtare!
                            </div>
                            <a href="#perfis" className="subs">Inscreva-se</a>
                        </div>
                </div>

                <div className="sbo" id="a-g4f">

                    <img src={Meleca2} className="meleca2"/>

                        <div className="tex">
                            <h1>Por quê nós queremos fazer a diferença?</h1>
                            <div className="ins">
                                <p>Somos a G4F, uma empresa orientada pelo pensamento criativo e inovação tecnológica.
                                    Nossa trajetória é marcada pelo atendimento aos nossos clientes com seriedade,
                                    qualidade e inovação.</p>
                                <p>Nossas soluções abrangem desde serviços de consultoria, projetos, integração e
                                    implantação de soluções, até o outsourcing de sistemas, pessoas e processos de
                                    negócio.</p>
                                <p>Com mais de 3.800 colaboradores atuando em 19 estados, centenas de projetos entregues
                                    e clientes satisfeitos. Nossa sede fica localizada em Brasília-DF e contamos com
                                    sete escritórios regionais, a G4F possui atuação em todo o território nacional.</p>
                            </div>
                        </div>
                        <div className="pics">
                            <div className="p1"></div>
                            <div className="p2"></div>
                            <div className="p3"></div>
                            <div className="p4"></div>
                        </div>
                </div>

                <div className="pfo" id="perfis">
                    <img src={Meleca3} className="meleca3"/>
                        <img src={Pendrive} className="pendrive"/>


                            <h1>Quem pode se inscrever?</h1>
                            <div className="opx">
                                <div className="item dbadm" style={{height:"450px"}}>
                                    <div style={{display:"flex", alignItems:"center",justifyContent:"center"}}>
                                        <h2>Administrador de Banco de Dados</h2>
                                        <img src={BD} style={{width:"100px"}}/>
                                    </div>

                                    <div className="txt" >
                                        O DBA (database administrator), sigla em inglês para Administrador de Banco de
                                        Dados, é um profissional da área de tecnologia responsável pela criação,
                                        instalação, monitoramento, reparos e análise de estruturas de um banco de dados.
                                        Esses bancos de dados armazenam informações sobre pessoas, lugares ou coisas de
                                        uma forma organizada e relacionada entre si, para que seja mais fácil encontrar
                                        elementos de uma pesquisa.
                                    </div>
                                    <div style={{padding:"20px", alignItems:"center",justifyContent:"center"}}>
                                        <a href="https://jobs.jobconvo.com/job/MjU2MjAxNA-g4f-programa-trainee-administrador-de-banco-de-dados-dba/ad4b9580-0d0a-4f29-ba67-b7f2afc86356"
                                           target="_blank" className="kmo">Saiba mais</a>
                                    </div>

                                </div>

                                <div className="item dev nmr" style={{height:"450px"}}>
                                    <div style={{display:"flex", alignItems:"center",justifyContent:"center"}}>
                                        <h2>Desenvolvedor Java</h2>
                                        <img src={Image7} style={{width:"120px"}}/>
                                    </div>

                                    <div className="txt">
                                        O Desenvolvedor é um profissional que constrói e implanta sistemas utilizando
                                        uma linguagem de programação, além de analisar, evoluir e testar programas já
                                        desenvolvidos.
                                    </div>
                                    <a href="https://jobs.jobconvo.com/job/MjU2MjAxNA-g4f-programa-trainee-desenvolvedor-java/6efd23ee-c65e-42ff-9d32-fd582fb8738d/?career_page=f694306a-ab98-44ec-8814-8da58b67751e"
                                       target="_blank" className="kmo">Saiba mais</a>
                                </div>

                                <div className="item infra" style={{height:"450px"}}>
                                    <div style={{display:"flex", alignItems:"center",justifyContent:"center"}}>
                                        <h2>Infraestrutura</h2>
                                        <img src={Wifi} style={{width: "80px", padding:" 20px"}}/>
                                    </div>

                                    <div className="txt">
                                        O técnico de infraestrutura e TI trabalha na manutenção de hardwares, gadgets,
                                        softwares e redes, a fim de prevenir e consertar falhas técnicas e agilizar os
                                        processos de trabalho.
                                    </div>
                                    <a href="https://jobs.jobconvo.com/job/MjU2MjAxNA-g4f-programa-trainee-infraestrutura/0f03d3b9-9c40-413f-9955-3f65198aa39c"
                                       target="_blank" className="kmo">Saiba mais</a>
                                </div>


                                <div className="item analista nmr" style={{height:"450px"}}>
                                    <div style={{display:"flex", alignItems:"center"}}>
                                        <h2>Requisitos de sofwtare</h2>
                                        <img src={Pendrive} style={{width: "80px", padding:"10px"}}/>
                                    </div>

                                    <div className="txt">
                                        Realiza o levantamento de requisitos e especificação de projetos de TI,
                                        desenvolvendo soluções para processos, mapeamento e análise de negócio. Elabora
                                        a documentação técnica de especificação de requisitos de softwares e status
                                        report para gestão de projetos.
                                    </div>
                                    <a href="https://jobs.jobconvo.com/job/MjU2MjAxNA-g4f-programa-trainee-requisitos-de-software/04a55e77-8304-4356-aaf8-ce75c06b4e66" target="_blank" className="kmo">
                                        Saiba mais
                                    </a>
                                </div>

                                <div className="both"></div>

                            </div>
                </div>

                <div className="stp" id="etapas">
                    <img src={Meleca4} className="meleca4"/>
                        <img src={Meleca5} className="meleca5"/>

                            <h1>Quais são as etapas do processo seletivo?</h1>
                            <div className="rkt"></div>
                            <div className="cpt"></div>
                            <div className="list">
                                <div className="item">
                                    <div className="num">01</div>
                                    <div className="info">
                                        <h2>Inscrições <span>Etapa de Lançamento</span></h2>
                                        <div className="date">De 17 até 26 de agosto</div>
                                        <div className="desc">As inscrições serão realizadas online através de links
                                            disponibilizados aqui neste mesmo site.
                                            <div></div>
                                        </div>
                                    </div>
                                    <div className="both"></div>
                                </div>

                                <div className="line"></div>
                                <div className="item">
                                    <div className="num">02</div>
                                    <div className="info">
                                        <h2>Teste de Mapeamento</h2>
                                        <div className="date">31 de agosto</div>
                                        <div className="desc"><b>Qual o seu perfil?</b> Será avaliada a aderência,
                                            raciocínio lógico e conhecimentos específicos dos inscritos.
                                            <div></div>
                                        </div>
                                    </div>
                                    <div className="both"></div>
                                </div>

                                <div className="line"></div>
                                <div className="item">
                                    <div className="num">03</div>
                                    <div className="info">
                                        <h2>Desafio <span>Presencial</span></h2>
                                        <div className="date">Nos dias 01 e 03 de setembro</div>
                                        <div className="desc"><b>É hora de resolver problemas!</b> O desafio proposto
                                            será capaz de avaliar a capacidade de cada candidato de estruturar e
                                            resolver problemas.
                                            <div></div>
                                        </div>
                                    </div>
                                    <div className="both"></div>
                                </div>

                                <div className="line"></div>
                                <div className="item">
                                    <div className="num">04</div>
                                    <div className="info">
                                        <h2>Dinâmica</h2>
                                        <div className="date">05 de setembro</div>
                                        <div className="desc"><b>Trabalho em equipe!</b> Nesta fase trabalharemos um
                                            exercício para medir a capacidade de trabalho em grupo.
                                            <div></div>
                                        </div>
                                    </div>
                                    <div className="both"></div>
                                </div>

                                <div className="line"></div>
                                <div className="item">
                                    <div className="num">05</div>
                                    <div className="info">
                                        <h2>Painel de Gestores <span>Presencial</span></h2>
                                        <div className="date">06 de setembro</div>
                                        <div className="desc"><b>Gestão e Inovação!</b> Agora é o momento de cada um
                                            falar com detalhes de como pensou e trabalhou na solução do desafio.
                                            <div></div>
                                        </div>
                                    </div>
                                    <div className="both"></div>
                                </div>

                                <div className="line"></div>
                                <div className="item">
                                    <div className="num">06</div>
                                    <div className="info">
                                        <h2>Entrevista com Diretores <span>Presencial</span></h2>
                                        <div className="date">De 09 até 12 de setembro</div>
                                        <div className="desc"><b>A diretoria quer te conhecer!</b> Na reta final do
                                            nosso processo seletivo os nossos executivos querem saber um pouco mais
                                            sobre você.
                                            <div></div>
                                        </div>
                                    </div>
                                    <div className="both"></div>
                                </div>

                                <div className="line"></div>
                                <div className="item">
                                    <div className="num">07</div>
                                    <div className="info">
                                        <h2>Início das atividades</h2>
                                        <div className="date">19 de setembro</div>
                                        <div className="desc"><b>Parabéns!</b> Você oficialmente se tornou um astronauta
                                            do universo G4F Labs.
                                            <div></div>
                                        </div>
                                    </div>
                                    <div className="both"></div>
                                </div>

                                <img src={Image2} className="astronauta2"/>
                            </div>
                </div>

                <div className="ben" id="beneficios">

                    <img src={Error} className="erro"/>
                        <img src={Image3} className="fone2"/>


                            <h1>Benefícios</h1>
                            <div className="list">
                                <div className="item health">
                                    <div className="texto-ben">Plano de Saúde</div>
                                </div>
                                <div className="item transport">
                                    <div className="texto-ben">Vale Transporte</div>
                                </div>
                                <div className="item food nmr">
                                    <div className="texto-ben">Vale Refeição</div>
                                </div>
                                <div className="item life">
                                    <div className="texto-ben">Seguro de Vida</div>
                                </div>
                                <div className="item clt">
                                    <div className="texto-ben">Contratação CLT</div>
                                </div>
                                <div className="item train nmr">
                                    <div className="texto-ben">+480 horas de treinamento</div>
                                </div>
                                <div className="both"></div>

                                <img src={Oculos} className="oculos"/>
                            </div>
                </div>

                <div className="faq" id="faq">
                    <h1 style={{color:"white"}}>Perguntas Frequentes</h1>
                    <div className="list">
                        <div className="item">
                            <input type="checkbox" id="question1"/>
                                <label htmlFor="question1" style={{color:"white"}}>Idade importa?</label>
                                <div className="answer" style={{color:"white"}}>
                                    Não, desde que você esteja no último ano da graduação ou tenha
                                    concluído o curso em até um ano antecedente.
                                </div>
                        </div>
                        <div className="item">
                            <input type="checkbox" id="question2"/>
                                <label htmlFor="question2" style={{color:"white"}}>Preciso estar na faculdade?</label>
                                <div className="answer" style={{color:"white"}}>
                                    Não necessariamente. Você precisa estar no último ano da
                                    graduação ou tenha concluído o curso em até um ano antecedente.
                                </div>
                        </div>
                        <div className="item">
                            <input type="checkbox" id="question3"/>
                                <label htmlFor="question3" style={{color:"white"}}>Mas e o inglês?</label>
                                <div className="answer" style={{color:"white"}}>
                                    Não há necessidade de proficiência em outro idioma durante as
                                    etapas do processo.
                                </div>
                        </div>
                        <div className="item">
                            <input type="checkbox" id="question4" />
                                <label htmlFor="question4" style={{color:"white"}}>Preciso morar em Brasília-DF?</label>
                                <div className="answer" style={{color:"white"}}>
                                    Sim, todas as etapas do programa serão realizadas na nossa sede
                                    em Brasília-DF.
                                </div>
                        </div>
                    </div>

                    <img src={Meleca7} className="meleca7"/>
                </div>
            </div>

        </div>
    )
  }

export default Header;