import React from 'react';

// Components
import NavigationBar from "../navigationBar";
import ExampleSection from './exampleSection';


const HowThemeWorksExample = ({title, onBackPress}) => {
    return ( 
        <React.Fragment>
            <NavigationBar textLabel={title} showBack="Yes" backPressed={onBackPress}/>
            <ExampleSection title="1. Decide on your colour palette" description="dfsdf " content=
            {
                <React.Fragment>
                    
                </React.Fragment>
                
            }/>
            <ExampleSection title="2. Create the theme component" description=" " content=
            {
                <React.Fragment>
                    
                </React.Fragment>
                
            }/>
            <ExampleSection title="3. Implement the ThemeProvider" description=" " content=
            {
                <React.Fragment>
                    
                </React.Fragment>
                
            }/>
            <ExampleSection title="4. Apply custom styles" description=" " content=
            {
                <React.Fragment>
                    
                </React.Fragment>
                
            }/>
        </React.Fragment>
     );
}
 
export default HowThemeWorksExample;