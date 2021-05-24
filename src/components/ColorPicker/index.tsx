import React, { useEffect, useRef, useState } from 'react';

import { VscSymbolColor } from 'react-icons/vsc';
import { ColorResult, TwitterPicker,  } from 'react-color'

import { Container } from './styles';
import { useField } from '@unform/core';

interface ColorProps {
    name: string;
    setColorHEX: (color: string) => void
}

const ColorPicker: React.FC<ColorProps> = ({ name, setColorHEX }) => {

    const colorRef = useRef<TwitterPicker>(null);
    const { registerField, defaultValue, error, fieldName } = useField(name);
    
    const [open, setOpen] = useState(false);
    const [color, setColor] = useState<ColorResult>({
        hex: '#eae4e9',
        hsl: {h: 310, s: 12.5, l: 90.6},
        rgb: {r: 234, g: 228, b: 233},
    });

    useEffect(() => {
        registerField({
          name: fieldName,
          ref: colorRef.current,
          path: 'value',
        });
      }, [fieldName, registerField]);
      
    function handleColor(color: ColorResult){
        setColorHEX(color.hex)
        setColor(color)
    }

    function toggleOpen(): void {
        setOpen(!open);
    }
    

  return (
      <Container background={color.hex} onClick={toggleOpen}>
          <VscSymbolColor />
          {open && (
              <TwitterPicker
                colors={[
                    "#eae4e9",
                    "#fff1e6",
                    "#fde2e4",
                    "#fad2e1",
                    "#e2ece9",
                    "#bee1e6",
                    "#f0efeb",
                    "#dfe7fd",
                    "#cddafd"
                ]}
                color={color.hex}
                onChange={handleColor}
                ref={colorRef}
              />
          )}
      </Container>
  );
}

export default ColorPicker;