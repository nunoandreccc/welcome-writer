import {createCustomElement, actionTypes} from '@servicenow/ui-core';
import snabbdom from '@servicenow/ui-renderer-snabbdom';
import styles from './styles.scss';
import '../bmwag-navigation-menu'
import '@servicenow/now-button';

const typeWriter =  function (updateState,state, dispatch){
	var promise = setTimeout(() => {			
		if (state.writer.length == state.properties.salutation.length){
			clearTimeout(promise);
		}else{				
			//const entry = "<div style='opacity: 1; transition: opacity 0.3s ease-in-out 1s;'>" + (state.properties.salutation[ state.writer.length] == " " ? "&nbsp;" : state.properties.salutation[ state.writer.length]) + "</div>";
			updateState({ writer: state.writer.concat(state.properties.salutation[ state.writer.length]) });
			dispatch("BMWAG_WELCOME_WRITER_TYPING",{});
		}
	},100);
}

const view = (state, {dispatch, updateState}) => {

	//typeWriter();
	
	return (
		<div>
			<bmwag-navigation-menu></bmwag-navigation-menu>
			<div>
				<h2>{state.writer}</h2>
				<p>{state.properties.welcome}</p>
				<now-button label="Save Record" variant="primary" size="md" icon="" ></now-button>
				
			</div>
		</div>
	);
};

createCustomElement('bmwag-welcome-writer', {
	renderer: {type: snabbdom},
	view,
	styles,
	initialState: {
		writer: []
	},
	properties: {
		welcome: {
			default: "Welcome to your ITSM.NEXT Self Service Portal"
		},
		salutation: { 
			default: "Hi, Nuno André Costa"
		}
	}
	, actionHandlers:{
		[actionTypes.COMPONENT_BOOTSTRAPPED] : ({dispatch, action, updateState, state}) => {
            dispatch("BMWAG_WELCOME_WRITER_TYPING",{ });
        },
		[actionTypes.COMPONENT_PROPERTY_CHANGED] : ({dispatch, action, updateState,state}) => {
            dispatch("BMWAG_WELCOME_WRITER_TYPING",{ });
        },
		"BMWAG_WELCOME_WRITER_TYPING": ({dispatch, action, updateState, state}) => {
			typeWriter(updateState, state, dispatch);
		}
	}
});
