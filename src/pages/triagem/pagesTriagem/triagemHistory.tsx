import React, { useState } from 'react';
import { StyleTypography } from '../styles';
import { Grid, Stack } from '@mui/material';
import RadioButtonVT from '../../../components/radioButton/radioButton';
import TextFieldVT from '../../../components/textField/textField';

interface SelectedValues {
  comorbidade: string;
  alcool: string;
  medicamento: string;
  droga: string;
  cirurgia: string;
  alergia: string;
}
const TriagemHistory = () => {
  const [selectedValue, setSelectedValues] = useState<SelectedValues>({
    comorbidade: '',
    alcool: '',
    medicamento: '',
    droga: '',
    cirurgia: '',
    alergia: '',
  });

  const handleRadioButtonChange = (
    group: keyof SelectedValues,
    value: string
  ) => {
    setSelectedValues(prevValues => ({
      ...prevValues,
      [group]: value,
    }));
  };

  return (
    <div>
      <Stack direction={'row'} spacing={10} style={{ paddingBottom: '3rem' }}>
        <Grid>
          <StyleTypography variant='subtitle1'>
            Você possui alguma comorbidade?
          </StyleTypography>
          <Stack direction={'row'}>
            <RadioButtonVT
              label='Sim'
              value='Sim comorbidade'
              checked={selectedValue.comorbidade === 'Sim comorbidade'}
              onChange={value => handleRadioButtonChange('comorbidade', value)}
            />

            <RadioButtonVT
              label='Não'
              value='Não comorbidade'
              checked={selectedValue.comorbidade === 'Não comorbidade'}
              onChange={value => handleRadioButtonChange('comorbidade', value)}
            />
          </Stack>
          <TextFieldVT
            model='tertiary'
            label='Se sim, qual(is)?'
            multiline
            maxRows={3}
          />
        </Grid>
        <Grid>
          <StyleTypography variant='subtitle1'>
            Você consome bebidas alcoólicas?
          </StyleTypography>
          <Stack direction={'row'}>
            <RadioButtonVT
              label='Sim'
              value='Sim alcool'
              checked={selectedValue.alcool === 'Sim alcool'}
              onChange={value => handleRadioButtonChange('alcool', value)}
            />

            <RadioButtonVT
              label='Não'
              value='Não alcool'
              checked={selectedValue.alcool === 'Não alcool'}
              onChange={value => handleRadioButtonChange('alcool', value)}
            />
          </Stack>
          <TextFieldVT
            model='tertiary'
            label='Se sim, com qual frequência?'
            multiline
            maxRows={3}
          />
        </Grid>
        <Grid>
          <StyleTypography variant='subtitle1'>
            Você faz uso de algum medicamento?
          </StyleTypography>
          <Stack direction={'row'}>
            <RadioButtonVT
              label='Sim'
              value='Sim medicamento'
              checked={selectedValue.medicamento === 'Sim medicamento'}
              onChange={value => handleRadioButtonChange('medicamento', value)}
            />

            <RadioButtonVT
              label='Não'
              value='Não medicamento'
              checked={selectedValue.medicamento === 'Não medicamento'}
              onChange={value => handleRadioButtonChange('medicamento', value)}
            />
          </Stack>
          <TextFieldVT
            model='tertiary'
            label='Se sim, qual(is)?'
            multiline
            maxRows={3}
          />
        </Grid>
      </Stack>
      <Stack direction={'row'} spacing={10}>
        <Grid>
          <StyleTypography variant='subtitle1'>
            Você faz uso de droga lícita ou não?
          </StyleTypography>
          <Stack direction={'row'}>
            <RadioButtonVT
              label='Sim'
              value='Sim droga'
              checked={selectedValue.droga === 'Sim droga'}
              onChange={value => handleRadioButtonChange('droga', value)}
            />

            <RadioButtonVT
              label='Não'
              value='Não droga'
              checked={selectedValue.droga === 'Não droga'}
              onChange={value => handleRadioButtonChange('droga', value)}
            />
          </Stack>
          <TextFieldVT
            model='tertiary'
            label='Se sim, com qual frequência?'
            multiline
            maxRows={3}
          />
        </Grid>
        <Grid>
          <StyleTypography variant='subtitle1'>
            Você já fez alguma cirurgia?
          </StyleTypography>
          <Stack direction={'row'}>
            <RadioButtonVT
              label='Sim'
              value='Sim cirurgia'
              checked={selectedValue.cirurgia === 'Sim cirurgia'}
              onChange={value => handleRadioButtonChange('cirurgia', value)}
            />

            <RadioButtonVT
              label='Não'
              value='Não cirurgia'
              checked={selectedValue.cirurgia === 'Não cirurgia'}
              onChange={value => handleRadioButtonChange('cirurgia', value)}
            />
          </Stack>
          <TextFieldVT
            model='tertiary'
            label='Se sim, qual(is)?'
            multiline
            maxRows={3}
          />
        </Grid>
        <Grid>
          <StyleTypography variant='subtitle1'>
            Você tem alguma alergia?
          </StyleTypography>
          <Stack direction={'row'}>
            <RadioButtonVT
              label='Sim'
              value='Sim alergia'
              checked={selectedValue.alergia === 'Sim alergia'}
              onChange={value => handleRadioButtonChange('alergia', value)}
            />

            <RadioButtonVT
              label='Não'
              value='Não alergia'
              checked={selectedValue.alergia === 'Não alergia'}
              onChange={value => handleRadioButtonChange('alergia', value)}
            />
          </Stack>
          <TextFieldVT
            model='tertiary'
            label='Se sim, qual(is)?'
            multiline
            maxRows={3}
          />
        </Grid>
      </Stack>
    </div>
  );
};

export default TriagemHistory;
