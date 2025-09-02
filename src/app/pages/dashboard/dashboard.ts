import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DashboardHeaderComponent } from './components/dashboard-header';
import { MetricsGridComponent } from './components/metrics-grid';
import { AnalyticsChartComponent } from './components/analytics-chart';
import { UsuarioService, Usuario } from '../../services/usuario.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule, DashboardHeaderComponent, MetricsGridComponent, AnalyticsChartComponent],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css']
})
export class DashboardComponent implements OnInit {

  metrics = [
    { label: 'Total de Usuários', value: 0, delta: '+10% em relação ao mês anterior' },
    { label: 'Total de Likes', value: 13, delta: '+23% em relação ao mês anterior' },
    { label: 'Posts Publicados', value: 12, delta: '+15% em relação ao mês anterior' },
    { label: 'Taxa de Engajamento', value: '4.8%', delta: '+0.3% em relação ao mês anterior' }
  ];

  listaUsuarios: Usuario[] = [];
  isListModalVisible = false;
  isEditModalVisible = false;
  isCreateModalVisible = false;
  usuarioEditando: Usuario | null = null;
  novoUsuario: Usuario = { nome: '', sobrenome: '', email: '' };

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.getTotalUsuarios();
    this.getTotalLikes();
  }

  getTotalUsuarios() {
    this.usuarioService.getTotalUsuarios().subscribe(usuarios => {
      this.metrics[0].value = usuarios.length;
      this.listaUsuarios = usuarios;
    });
  }
  
  getTotalLikes() {
    this.usuarioService.getTotalLikes().subscribe(totalLikes => {
      //this.metrics[1].value = totalLikes;
    });
  }

  onUsuariosClick() {
    this.isListModalVisible = true;
  }

  closeListModal() {
    this.isListModalVisible = false;
  }

  onEditClick(usuario: Usuario) {
    this.usuarioEditando = { ...usuario };
    this.isEditModalVisible = true;
    this.isListModalVisible = false;
  }

  closeEditModal() {
    this.isEditModalVisible = false;
    this.usuarioEditando = null;
    this.isListModalVisible = true;
  }

  onSaveEdit() {
    if (this.usuarioEditando && this.usuarioEditando.id) {
      this.usuarioService.atualizarUsuario(this.usuarioEditando.id, this.usuarioEditando).subscribe({
        next: () => {
          console.log('Usuário atualizado com sucesso!');
          this.closeEditModal();
          this.getTotalUsuarios();
        },
        error: (err) => {
          console.error('Erro ao atualizar usuário:', err);
          alert('Erro ao atualizar usuário. Verifique o console.');
        }
      });
    }
  }

  onCreateClick() {
    this.isListModalVisible = false;
    this.isCreateModalVisible = true;
    this.novoUsuario = { nome: '', sobrenome: '', email: '' };
  }

  closeCreateModal() {
    this.isCreateModalVisible = false;
    this.isListModalVisible = true;
  }

  onSaveNewUser() {
    this.usuarioService.criarUsuario(this.novoUsuario).subscribe({
      next: () => {
        console.log('Usuário criado com sucesso!');
        this.closeCreateModal();
        this.getTotalUsuarios();
      },
      error: (err) => {
        console.error('Erro ao criar usuário:', err);
        alert('Erro ao criar usuário. Verifique o console.');
      }
    });
  }

  onDeleteClick(id: string) {
    if (confirm('Tem certeza que deseja deletar este usuário?')) {
      this.usuarioService.deletarUsuario(id).subscribe({
        next: () => {
          console.log('Usuário deletado com sucesso!');
          this.getTotalUsuarios();
        },
        error: (err) => {
          console.error('Erro ao deletar usuário:', err);
          alert('Erro ao deletar usuário. Verifique o console para mais detalhes.');
        }
      });
    }
  }
}