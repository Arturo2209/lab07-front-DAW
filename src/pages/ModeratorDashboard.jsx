// src/pages/ModeratorDashboard.jsx
import React from 'react';
import './ModeratorDashboard.css';

const ModeratorDashboard = () => (
  <div className="moderator-dashboard">
    <header className="dashboard-header">
      <div className="header-content">
        <div className="icon-wrapper">
          <i className="fas fa-user-shield"></i>
        </div>
        <div className="header-text">
          <h1>Centro de Control de Moderación</h1>
          <p>Supervisión y gestión de la comunidad</p>
        </div>
      </div>
    </header>

    <div className="dashboard-grid">
      {/* Tarjeta 1: Rol del Moderador */}
      <div className="dashboard-card role-card">
        <div className="card-header">
          <i className="fas fa-id-card"></i>
          <h2>Tu Rol en la Plataforma</h2>
        </div>
        <div className="card-content">
          <p>
            Como <span className="highlight">Moderador</span>, eres el puente entre los usuarios y los administradores, 
            garantizando un entorno seguro y agradable para todos.
          </p>
          <div className="responsibilities">
            <div className="responsibility-item">
              <i className="fas fa-eye"></i>
              <span>Vigilancia de contenido</span>
            </div>
            <div className="responsibility-item">
              <i className="fas fa-flag"></i>
              <span>Gestión de reportes</span>
            </div>
            <div className="responsibility-item">
              <i className="fas fa-hands-helping"></i>
              <span>Apoyo a usuarios</span>
            </div>
          </div>
        </div>
      </div>

      {/* Tarjeta 2: Funciones sobre Usuarios */}
      <div className="dashboard-card users-card">
        <div className="card-header">
          <i className="fas fa-users-cog"></i>
          <h2>Gestión de Usuarios</h2>
        </div>
        <div className="card-content">
          <div className="alert-note">
            <i className="fas fa-exclamation-circle"></i>
            <span>Acciones permitidas en tu rol</span>
          </div>
          <ul className="actions-list">
            <li>
              <i className="fas fa-user-check"></i>
              <span>Verificar identidades</span>
            </li>
            <li>
              <i className="fas fa-comment-exclamation"></i>
              <span>Emitir advertencias</span>
            </li>
            <li>
              <i className="fas fa-history"></i>
              <span>Auditar actividad</span>
            </li>
            <li>
              <i className="fas fa-exclamation-triangle"></i>
              <span>Escalar problemas</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Tarjeta 3: Herramientas de Moderación */}
      <div className="dashboard-card tools-card">
        <div className="card-header">
          <i className="fas fa-toolbox"></i>
          <h2>Herramientas Rápidas</h2>
        </div>
        <div className="card-content">
          <div className="tools-grid">
            <button className="tool-button">
              <i className="fas fa-clipboard-list"></i>
              <span>Reportes Pendientes</span>
            </button>
            <button className="tool-button">
              <i className="fas fa-comments"></i>
              <span>Comentarios</span>
            </button>
            <button className="tool-button">
              <i className="fas fa-file-alt"></i>
              <span>Contenidos</span>
            </button>
            <button className="tool-button">
              <i className="fas fa-chart-line"></i>
              <span>Métricas</span>
            </button>
          </div>
        </div>
      </div>

      {/* Sección de Actividad Reciente */}
      <div className="dashboard-card activity-card">
        <div className="card-header">
          <i className="fas fa-bell"></i>
          <h2>Alertas Requeridas</h2>
        </div>
        <div className="card-content">
          <div className="activity-table">
            <div className="table-header">
              <span>ID</span>
              <span>Categoría</span>
              <span>Usuario</span>
              <span>Descripción</span>
              <span>Acción</span>
            </div>
            <div className="table-row">
              <span className="case-id">#1254</span>
              <span className="case-type comment-case">Comentario</span>
              <span className="case-user">usuario23</span>
              <span className="case-desc">Lenguaje inapropiado</span>
              <button className="case-action">Evaluar</button>
            </div>
            <div className="table-row">
              <span className="case-id">#1253</span>
              <span className="case-type report-case">Reporte</span>
              <span className="case-user">usuario45</span>
              <span className="case-desc">Contenido duplicado</span>
              <button className="case-action">Evaluar</button>
            </div>
            <div className="table-row">
              <span className="case-id">#1252</span>
              <span className="case-type request-case">Solicitud</span>
              <span className="case-user">usuario12</span>
              <span className="case-desc">Verificación de cuenta</span>
              <button className="case-action">Evaluar</button>
            </div>
          </div>
          <div className="view-all">
            <button className="view-all-button">
              <i className="fas fa-arrow-right"></i>
              <span>Ver todas las alertas</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ModeratorDashboard;