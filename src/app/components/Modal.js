var React = require('react');

class Modal extends React.Component {
    render() {
        if (this.props.isOpen === false) {
            return null;
        }


        let modalStyle = {
            position: 'absolute',
            top: '100%',
            left: '200%',
            width: 650,
            height: 425,
            transform: 'translate(-50%, -50%)',
            zIndex: '9999',
            background: '#353535'
        };


        let backdropStyle = {
            position: 'fixed',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: 'rgba(0,0,0,0.3)',
            padding: 50
        };


        return (
            <div className={this.props.containerClassName}>
                <div className={this.props.className} style={modalStyle}>
                    {this.props.children}
                </div>
                {!this.props.noBackdrop &&
                    <div className={this.props.backdropClassName} style={backdropStyle}
                        onClick={e => this.close(e)}/>}
            </div>
        );
    }

    close(e) {
        e.preventDefault();

        if (this.props.onClose) {
            this.props.onClose();
        }
    }
}

module.exports = Modal;
