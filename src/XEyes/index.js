import React from 'react';

import './XEyes.css';

class XEyes extends React.Component {
    componentDidMount() {
        window.addEventListener('click', e => {
            this.eyes(e.clientX, e.clientY, 20 + Math.random() * 50, e);
        });
    }

    drawEye = (context, size, x, y, cx, cy) => {
        const dx = x - cx;
        const dy = y - cy;
        const angle = Math.atan2(dy, dx);
        context.save();
        context.translate(cx, cy);
        context.rotate(angle);
        context.beginPath();
        context.arc(0, 0, size / 2, 0, Math.PI * 2);
        context.stroke();
        context.beginPath();
        context.arc(size * 0.4, 0, size * 0.1, 0, Math.PI * 2);
        context.fill();
        context.restore();
    };

    onMouseMove = (context, rect, size, event) => {
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        context.clearRect(0, 0, size * 2 + 10, size + 10);
        this.drawEye(context, size, x, y, size / 2 + 5, size / 2 + 5);
        this.drawEye(context, size, x, y, size * 1.5 + 5, size / 2 + 5);
    };

    eyes = (x, y, size, event) => {
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        document.body.appendChild(canvas);
        canvas.style.position = 'absolute';
        canvas.style.left = `${x - size - 5}px`;
        canvas.style.top = `${y - size / 2 - 5}px`;

        const rect = canvas.getBoundingClientRect();
        canvas.width = size * 2 + 10;
        canvas.height = size + 10;

        this.onMouseMove(context, rect, size, event);

        window.addEventListener('mousemove', this.onMouseMove.bind(null, context, rect, size));
    };

    render() {
        return <div id="info">Click to add eyes</div>;
    }
}

export default XEyes;
