var React = require('react');
var Link = require('react-router').Link;
var Header = require('./Header.js');

class Layout extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loggedIn: false
        };
    }

    render() {
        var custom = this.props.custom;
        // console.log(custom);
        // console.log(this.props);
        // console.log(custom);
        const { children } = this.props;
        var childrenWithProps = React.Children.map(children, child => React.cloneElement(child, custom));
        // console.log(this.state.loggedIn);
        return (
            <html>
                <head>
                    <title>OneUp</title>
                    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" />
                    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
                    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
                    <link rel='stylesheet' href='public/CSS/LayoutStyle.css' />
                    <link rel='stylesheet' href='public/CSS/HeaderStyle.css' />
                    <link rel='stylesheet' href='public/CSS/HomeStyle.css' />
                    <link rel='stylesheet' href='public/CSS/SignInStyle.css' />
                    <link rel='stylesheet' href='public/CSS/ProfileStyle.css' />
                    <link rel='stylesheet' href='public/CSS/SettingsStyle.css' />
                    <link rel='stylesheet' href='public/CSS/UploadVideoStyle.css' />
                </head>
                <body>
                    <Header tabs={custom.tabs} />
                    {childrenWithProps}
                    <script dangerouslySetInnerHTML={{
                        __html: 'window.PROPS=' + JSON.stringify(custom)
                    }} />
                    <script src='public/JS/bundle.js' />
                </body>
            </html>
        );
    }
}


module.exports = Layout;
