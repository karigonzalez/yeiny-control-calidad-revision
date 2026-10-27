// Datos del Informe de Revisión y Control de Calidad Simulado
const reviewData = [
    {
        module: "Registros Transaccionales B2B",
        volume: "450 reg.",
        status: "Conforme",
        statusClass: "rating-5",
        type: "positive",
        finding: "Consistencia validada al 100% en matrices Excel",
        action: "Archivado sin incidencias críticas"
    },
    {
        module: "Auditoría de Base de Datos",
        volume: "380 reg.",
        status: "Con Observación",
        statusClass: "rating-3",
        type: "neutral",
        finding: "Detectados 12 duplicados menores por tipificación",
        action: "Normalización y depuración inmediata"
    },
    {
        module: "Validación de Indicadores",
        volume: "250 reg.",
        status: "Con Observación",
        statusClass: "rating-3",
        type: "neutral",
        finding: "Desviación menor en formato de fecha inicial",
        action: "Estandarización de plantilla en Google Sheets"
    },
    {
        module: "Controles de Calidad Final",
        volume: "200 reg.",
        status: "Corregido",
        statusClass: "rating-1",
        type: "negative",
        finding: "Inconsistencia aislada en campos obligatorios",
        action: "Aplicación de regla de validación en Notion"
    }
];

function filterFeedback(type) {
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    
    if (event && event.target) {
        event.target.classList.add('active');
    }

    const tbody = document.getElementById('csat-table-body');
    tbody.innerHTML = '';

    const filtered = type === 'all' 
        ? reviewData 
        : reviewData.filter(item => item.type === type);

    filtered.forEach(item => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td><strong>${item.module}</strong></td>
            <td>${item.volume}</td>
            <td><span class="badge-rating ${item.statusClass}">${item.status}</span></td>
            <td>${item.finding}</td>
            <td><em>${item.action}</em></td>
        `;
        tbody.appendChild(tr);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    filterFeedback('all');

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if(target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});