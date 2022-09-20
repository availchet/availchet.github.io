import React from 'react';

import './XEyes.css';

const drawEye = function (context, size, x, y, cx, cy) {
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

class XEyes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mouseX: 0,
            mouseY: 0,
            eyes: [],
        };
    }

    componentDidMount() {
        window.addEventListener('mousemove', this.onMouseMove);
        window.addEventListener('click', this.addEyes);
        document.body.style.overflow = 'hidden';
    }

    componentWillUnmount() {
        this.setState({eyes: []});
        window.removeEventListener('mousemove', this.onMouseMove);
        window.removeEventListener('click', this.addEyes);
        document.body.style.overflow = 'auto';
    }

    onMouseMove = event => {
        this.setState({
            mouseX: event.clientX,
            mouseY: event.clientY,
        });
    };

    addEyes = e => {
        const x = e.clientX;
        const y = e.clientY;
        const size = 20 + Math.random() * 50;
        const canvas = document.createElement('canvas');

        canvas.style.position = 'absolute';
        canvas.style.left = `${x - size - 5}px`;
        canvas.style.top = `${y - size / 2 - 5}px`;
        canvas.width = size * 2 + 10;
        canvas.height = size + 10;

        document.body.appendChild(canvas);

        this.setState(prevState => ({
            eyes: [...prevState.eyes, { x, y, size, canvas }],
        }));
    };

    renderEyes = (x, y, size, canvas) => {
        const context = canvas.getContext('2d');
        const rect = canvas.getBoundingClientRect();

        context.clearRect(0, 0, size * 2 + 10, size + 10);

        const { mouseX, mouseY } = this.state;
        const drawX = mouseX - rect.left;
        const drawY = mouseY - rect.top;

        drawEye(context, size, drawX, drawY, size / 2 + 5, size / 2 + 5);
        drawEye(context, size, drawX, drawY, size * 1.5 + 5, size / 2 + 5);
    };

    render() {
        const { eyes } = this.state;
        eyes.map(({ x, y, size, canvas }) => this.renderEyes(x, y, size, canvas));
        return <div id="info">Click to add eyes</div>;
    }
}

export default XEyes;
