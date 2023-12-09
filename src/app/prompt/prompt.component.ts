import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Clipboard } from '@angular/cdk/clipboard';


@Component({
  selector: 'app-prompt',
  standalone: true,
  imports: [    FormsModule,
    ReactiveFormsModule],
  templateUrl: './prompt.component.html',
  styleUrl: './prompt.component.scss'
})
export class PromptComponent implements OnInit {


  constructor(private clipboard: Clipboard) {}

  prompt1: any = "Agora esqueça tudo! Vamos fazer de outro bimestre. Meu aluno estudou:";
  prompt2: any = "";
  prompt3: any = "As habilidades desenvolvidas foram:";
  prompt4: any = "";

  prompt5: any = "Deixe o texto impessoal e no pretérito, como se o estudante já tivesse trabalhado. Seja sucinto, apresente atividades individualizadas com seus respectivos materiais. Sem apresentações, apenas o conteúdo. Não repita o texto que escrevi, nenhuma parte dele, apenas a metodologia de trabalho e os materiais. Não coloque em tópicos. Me dê apenas um texto descritivo longo com alguns relatos de experiência. Não esqueça de dizer dos materiais utilizados. Prefira sempre materiais adaptados ou confeccionados manualmente. Não cite os códigos de habilidade."

  
  isCopying1 = false;
  isCopying2 = false;
  buttonTimeout: any; // Variável para armazenar o timeout

  result: any = '';
  result2: any = '';


  ngOnInit(): void {
    this.updateResult();
  }

  updateResult() {
    this.result = `${this.prompt1} ${this.prompt2} ${this.prompt3} ${this.prompt4}`;
    this.result2 = `${this.prompt5}`
  }


  clearValues() {
    this.prompt2 = '';
    this.prompt4 = '';
    this.updateResult(); 
  }

  copyValues1(){
    this.clipboard.copy(this.result);
          // Atualiza o estado do botão
          this.isCopying1 = true;

          // Define um timeout para reverter o estado do botão após 2 segundos
          this.buttonTimeout = setTimeout(() => {
            this.isCopying1 = false;
          }, 2000);
  }

  copyValues2(){
    this.clipboard.copy(this.result2);
          // Atualiza o estado do botão
          this.isCopying2 = true;

          // Define um timeout para reverter o estado do botão após 2 segundos
          this.buttonTimeout = setTimeout(() => {
            this.isCopying2 = false;
          }, 2000);
  }
    
    

  ngOnDestroy() {
    clearTimeout(this.buttonTimeout);
  }

  }


