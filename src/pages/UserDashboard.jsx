// src/pages/UserDashboard.jsx
import React from 'react';
import './UserDashboard.css';

const UserDashboard = () => (
  <div className="user-dashboard">
    <header className="user-header">
      <div className="user-greeting">
        <div className="avatar-container">
          <div className="user-avatar">
            <i className="fas fa-user-circle"></i>
          </div>
        </div>
        <div className="user-info">
          <h1>Tu Espacio Personal</h1>
          <p className="welcome-message">Bienvenido de vuelta</p>
        </div>
      </div>
    </header>

    <div className="dashboard-container">
      {/* Tarjeta de Perfil */}
      <div className="profile-card">
        <div className="card-header">
          <i className="fas fa-id-card"></i>
          <h2>Mi Perfil</h2>
        </div>
        <div className="profile-content">
          <div className="profile-summary">
            <div className="profile-avatar">
              <i className="fas fa-user"></i>
            </div>
            <h3>Usuario Registrado</h3>
            <p className="member-since">Miembro desde Enero 2023</p>
          </div>
          <div className="profile-details">
            <div className="detail-item verified">
              <i className="fas fa-envelope"></i>
              <span>Email verificado</span>
              <i className="fas fa-check-circle"></i>
            </div>
            <div className="detail-item secure">
              <i className="fas fa-shield-alt"></i>
              <span>Cuenta segura</span>
              <span className="status-badge">Activa</span>
            </div>
            <button className="edit-profile-btn">
              <i className="fas fa-edit"></i>
              <span>Editar perfil</span>
            </button>
          </div>
        </div>
      </div>

      {/* Tarjeta de Estadísticas */}
      <div className="stats-card">
        <div className="card-header">
          <i className="fas fa-chart-pie"></i>
          <h2>Mis Estadísticas</h2>
        </div>
        <div className="stats-content">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-value">24</div>
              <div className="stat-label">Contribuciones</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">5</div>
              <div className="stat-label">Amigos</div>
            </div>
          </div>
          <div className="progress-container">
            <div className="progress-bar">
              <div className="progress-fill" style={{width: '75%'}}></div>
            </div>
            <div className="progress-text">Perfil completado al 75%</div>
          </div>
          <div className="level-badge">
            <i className="fas fa-star"></i>
            <span>Usuario Activo</span>
          </div>
        </div>
      </div>

      {/* Tarjeta de Acciones */}
      <div className="actions-card">
        <div className="card-header">
          <i className="fas fa-bolt"></i>
          <h2>Acciones Rápidas</h2>
        </div>
        <div className="actions-grid">
          <button className="action-btn">
            <i className="fas fa-plus-circle"></i>
            <span>Nuevo contenido</span>
          </button>
          <button className="action-btn">
            <i className="fas fa-user-friends"></i>
            <span>Invitar amigos</span>
          </button>
          <button className="action-btn">
            <i className="fas fa-cog"></i>
            <span>Configuración</span>
          </button>
          <button className="action-btn">
            <i className="fas fa-question-circle"></i>
            <span>Ayuda</span>
          </button>
        </div>
      </div>

      {/* Tarjeta de Actividad */}
      <div className="activity-card">
        <div className="card-header">
          <i className="fas fa-history"></i>
          <h2>Actividad Reciente</h2>
        </div>
        <div className="activity-list">
          <div className="activity-item">
            <div className="activity-icon">
              <i className="fas fa-file-alt"></i>
            </div>
            <div className="activity-details">
              <div className="activity-time">Hoy, 10:30 AM</div>
              <div className="activity-description">Publicaste un nuevo artículo</div>
            </div>
          </div>
          <div className="activity-item">
            <div className="activity-icon">
              <i className="fas fa-comment"></i>
            </div>
            <div className="activity-details">
              <div className="activity-time">Ayer, 4:15 PM</div>
              <div className="activity-description">Comentaste en una publicación</div>
            </div>
          </div>
          <div className="activity-item">
            <div className="activity-icon">
              <i className="fas fa-user-plus"></i>
            </div>
            <div className="activity-details">
              <div className="activity-time">Ayer, 11:20 AM</div>
              <div className="activity-description">Agregaste un nuevo amigo</div>
            </div>
          </div>
        </div>
        <div className="view-all-container">
          <button className="view-all-btn">
            <i className="fas fa-redo"></i>
            <span>Ver toda la actividad</span>
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default UserDashboard;