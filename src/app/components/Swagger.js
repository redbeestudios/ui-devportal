import React, {Component} from 'react';
import PropTypes from 'prop-types';

class SwaggerUI extends Component {

    componentDidMount() {
        const SwaggerUi = require('swagger-ui');
        SwaggerUi({
            dom_id: '#swaggerContainer',
            url: this.props.url,
            plugins: [ OperationsLayoutPlugin ],
            layout: "OperationsLayout"
            //spec: {},
            //presets: [SwaggerUi.apis]
        });
    }

    render() {
        return (
            <div id="swaggerContainer" className='swagger-ui'/>
        );
    }
}

// Create the layout component
class OperationsLayout extends Component {
  render() {
    const { getComponent } = this.props;
    const Operations = getComponent("operations", true)
    return (
      <div>
        <Operations />
      </div>
    )
  }
}

// Create the plugin that provides our layout component
const OperationsLayoutPlugin = () => {
  return {
    components: {
      OperationsLayout: OperationsLayout
    }
  }
}

SwaggerUI.propTypes = {
    url: PropTypes.string,
    spec: PropTypes.object
};

SwaggerUI.defaultProps = {
    url: `https://petstore.swagger.io/v2/swagger.json`
};

export default SwaggerUI;
