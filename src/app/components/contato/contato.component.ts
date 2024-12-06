import { Component, Input } from '@angular/core';
import { Contato } from '../../models/contato';
import { EmailService } from '../../services/email.service';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../directive/SharedModule';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-contato',
  standalone: true,
  imports: [FormsModule, SharedModule, NgIf],
  templateUrl: './contato.component.html',
  styleUrl: './contato.component.scss'
})
export class ContatoComponent {

  @Input() contato!: Contato
  nome: string = '';
  whatsapp: string = '';
  email: string = '';
  comentario: string = '';
  isLoading: boolean = false;  // Controle do estado de carregamento
  successMessage: boolean = false;  // Controle da mensagem de sucesso
  constructor(private emailService: EmailService) {}


  isFormValid(): boolean {
    return this.nome !== '' && this.whatsapp !== '' && this.email !== '' && this.comentario !== '';
  }

  onSubmit() {
    if (!this.nome || !this.whatsapp || !this.email || !this.comentario) {
      alert('Por favor, preencha todos os campos!');
      return;
    }
    this.isLoading = true;
    this.successMessage = false;  

    this.emailService.sendEmail(this.nome, this.whatsapp, this.email, this.comentario).subscribe({
      next: (response) => {
        this.successMessage = true;
      },
      error: (error) => {
        alert('Erro ao enviar e-mail. Tente novamente!');
      },
      complete: () => {
        this.isLoading = false;
      },
    });
  }

  clearForm() {
    this.nome = '';
    this.whatsapp = '';
    this.email = '';
    this.comentario = '';
  }
}
