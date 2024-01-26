import React from 'react';
import grapesjs from 'grapesjs';
import plugin from 'grapesjs-preset-newsletter';
import GjsEditor from '@grapesjs/react';

const PresetNewsletter = () => {


  return (
    <>
      <GjsEditor
        // Pass the core GrapesJS library to the wrapper (required).
        grapesjs={grapesjs}
        // Load the GrapesJS CSS file asynchronously from URL.
        // This is an optional prop, you can always import the CSS directly in your JS if you wish.
        grapesjsCss="https://unpkg.com/grapesjs/dist/css/grapes.min.css"
        container='#gjs'
        plugins={[editor => plugin(editor, { /* options */ }),]}
        // GrapesJS init options
        options={{
          height: '100vh',
          storageManager: false,
        }}
      />
    </>
    
  );
}

export default PresetNewsletter