import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TemplatePage from '../../template/template-page/templatePage';
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
} from '@mui/material';
import TextFieldVT from '../../components/textField/textField';

function TabPanel(props: {
  [x: string]: any;
  children: any;
  value: any;
  index: any;
}): React.JSX.Element {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: any, newValue: React.SetStateAction<number>) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: 'background.paper',
        display: 'flex',
        height: 224,
      }}
    >
      <Tabs
        orientation='vertical'
        variant='scrollable'
        value={value}
        onChange={handleChange}
        aria-label='Vertical tabs example'
        sx={{ borderRight: 1, borderColor: 'divider' }}
      >
        <Tab label='Informações do Paciente' {...a11yProps(0)} />
        <Tab label='Sintomas' {...a11yProps(1)} />
        <Tab label='Hitórico Médico' {...a11yProps(2)} />

        <div>
          <h1>Você é Paciente?</h1>
        </div>

        <FormControl>
          <FormLabel id='demo-radio-buttons-group-label'>escolha</FormLabel>
          <RadioGroup
            aria-labelledby='demo-radio-buttons-group-label'
            defaultValue='Não'
            name='radio-buttons-group'
          >
            <FormControlLabel value='Não' control={<Radio />} label='Não' />
            <FormControlLabel value='Sim' control={<Radio />} label='Sim' />
          </RadioGroup>
        </FormControl>
      </Tabs>
      <TabPanel value={value} index={0}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4}>
            <TextFieldVT
              type='text'
              id='nome'
              label='Nome completo do paciente'
              model='primary'
              required
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <TextFieldVT
              type='date'
              id='data-nascimento'
              label='Data de nascimento'
              model='primary'
              required
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <TextFieldVT
              type='number'
              id='cpf'
              label='CPF'
              model='primary'
              required
            />
          </Grid>
          <Typography
            variant='h4'
            style={{ textDecoration: 'underline', paddingBottom: '2rem' }}
          >
            Próximo
          </Typography>
        </Grid>
        <br></br>
        <br></br>
      </TabPanel>

      <TabPanel value={value} index={1} children={undefined}></TabPanel>
      <FormGroup>
        <div>
          <h1>Selecione seus sintomas:</h1>
        </div>
        <FormControlLabel value='Tosse' control={<Radio />} label='Tosse' />
        <FormControlLabel
          value='Perda de Apetite'
          control={<Radio />}
          label='Perda de Apetite'
        />
        <FormControlLabel
          value='Coriza Diarréia'
          control={<Radio />}
          label='Coriza Diarréia'
        />
        <FormControlLabel
          value='Dor de Garganta'
          control={<Radio />}
          label='Dor de Garganta'
        />
        <FormControlLabel
          value='Vômito/Nausea'
          control={<Radio />}
          label='Vômito/Nausea'
        />
        <FormControlLabel value='Fadiga' control={<Radio />} label='Fadiga' />
        <FormControlLabel
          value='Falta de Ar'
          control={<Radio />}
          label='Falta de Ar'
        />
        <FormControlLabel
          value='Dor no corpo'
          control={<Radio />}
          label='Sonolência'
        />
        <Grid item xs={12} sm={6} md={4}>
          <TextFieldVT
            type='text'
            id='nome'
            label='Outros sintomas'
            model='primary'
            required
          />
        </Grid>
        <div>
          <h1>Selecione sua Temperatura:</h1>
        </div>
        <FormControlLabel
          value='Hipertemia'
          control={<Radio />}
          label='Hipertemia (41°C ou mais)'
        />
        <FormControlLabel
          value='Febre Alta'
          control={<Radio />}
          label='Febre Alta (39,6°C a 41°C)'
        />
        <FormControlLabel
          value='Febre'
          control={<Radio />}
          label='Febre (37,6°C a 39,5°C)'
        />
        <FormControlLabel
          value='Normal'
          control={<Radio />}
          label='Normal (36°C a 37,5°C)'
        />
        <FormControlLabel
          value='Hipotermia'
          control={<Radio />}
          label='Hipotermia (36°C ou menos)'
        />
        <Typography
          variant='h4'
          style={{ textDecoration: 'underline', paddingBottom: '2rem' }}
        >
          Próximo
        </Typography>
        <Typography
          variant='h4'
          style={{ textDecoration: 'underline', paddingBottom: 'rem' }}
        >
          Anterior
        </Typography>
      </FormGroup>
      <TabPanel value={value} index={2} children={undefined}></TabPanel>
    </Box>
  );
}
