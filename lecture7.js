const questions = [
  // Question 1: IVC Diameter
  {
      "question": "On echocardiography, the diameter of the inferior vena cava is measured at 1.6 cm during expiration and 0.6 cm after the patient is asked to sniff. The right atrial pressure is estimated at:.",
      "options": [
          "A. 0–5 mm Hg.",
          "B. 5–10 mm Hg.",
          "C. 10–20 mm Hg.",
          "D. Indeterminate"
      ],
      "explanationImage": "https://alhadi415.github.io/top/images/7_1e.JPG",
      "answer": "A. 0–5 mm Hg.",
      "explanation": ""
  },
  // Question 2: Mitral Valve Area Calculation
  {
      "question": "A 32-year-old woman is referred for evaluation of rheumatic mitral valve stenosis. No mitral regurgitation was noted. The following values were obtained by Doppler echocardiography",
      "options": [
          "A. Mitral valve area can be calculated by dividing 220 into deceleration time.",
          "B. Stroke volume across the mitral valve is 72 ml per beat.",
          "C. Pressure half-time is 355 msec.",
          "D. Mitral valve area is 0.8 cm².",
          "E. During exertion, her mean gradient is expected to decrease."
      ],
      "explanationImage": "https://alhadi415.github.io/top/images/7_2e.JPG",
      "questionImage": "https://alhadi415.github.io/top/images/7_2q.JPG",
      "answer": "D. Mitral valve area is 0.8 cm².",
      "explanation": ""
  },
  // Question 3: Patent Ductus Arteriosus (PDA)
  {
      "question": "A 21-year-old man with dyspnea on exertion and enlarged pulmonary artery on chest X-ray underwent transthoracic echocardiography. The study revealed patent ductus arteriosus (PDA) and the following: Left ventricular outflow tract (LVOT) diameter 2.0 cm, LVOT velocity-time integral 31 cm, Right ventricular outflow tract (RVOT) diameter 2.5 cm, RVOT velocity-time integral 12 cm, Heart rate 80 bpm. The following statement is TRUE:",
      "options": [
          "A. Systemic blood flow (Qs) is 7.8 l/minute.",
          "B. The ratio of pulmonic to systemic blood flow (Qp:Qs) is less than one.",
          "C. Stroke volume entering the lungs is 38 ml per beat.",
          "D. Patient is cyanotic in the lower parts of the body.",
          "E. The ratio of stroke volume through the left ventricular outflow tract (LVOT) and the stroke volume through the right ventricular outflow tract (RVOT) is equal to the Qp:Qs ratio in this patient."
      ],
      "explanationImage": "https://alhadi415.github.io/top/images/7_3e.JPG",
      "questionImage": "https://alhadi415.github.io/top/images/7_3q.JPG",
      "answer": "E. The ratio of stroke volume through the left ventricular outflow tract (LVOT) and the stroke volume through the right ventricular outflow tract (RVOT) is equal to the Qp:Qs ratio in this patient.",
      "explanation": ""
  },
  // Question 4: Pulmonary Artery Diastolic Pressure
  {
      "question": "A 39-year-old woman was admitted for severe shortness of breath on exertion. On transthoracic echocardiogram, there was mild pulmonic regurgitation. Continuous-wave spectral Doppler tracings of the pulmonic regurgitant jet reveal the following: Early diastolic peak velocity 3.0 m/sec, End-diastolic velocity 2.0 m/sec. Examination of the inferior vena cava by M-mode echocardiography demonstrated the following: IVC diameter during expiration 2.6 cm, IVC diameter during inspiration 2.6 cm. The following statement is TRUE:",
      "options": [
          "A. Right atrial pressure is estimated at 6 mm Hg.",
          "B. Pulmonary artery diastolic pressure is approximately 31 mm Hg.",
          "C. Pulmonary artery diastolic pressure is 36 mm Hg minus the right atrial pressure.",
          "D. Pulmonary artery diastolic pressure cannot be assessed if the pulmonic regurgitation is only mild.",
          "E. Pulmonary artery diastolic pressure is normal."
      ],
      "explanationImage": "https://alhadi415.github.io/top/images/7_4e.JPG",
      "questionImage": "https://alhadi415.github.io/top/images/7_4q.JPG",
      "answer": "B. Pulmonary artery diastolic pressure is approximately 31 mm Hg.",
      "explanation": ""
  },
  // Question 5: Mitral Regurgitation
  {
      "question": "A 42-year-old man was admitted to the hospital after a 1-month history of intermittent fever and progressive shortness of breath. Blood cultures grew Streptococcus viridans. On transesophageal echocardiogram, perforation of the anterior mitral leaflet and mitral regurgitation were seen. On color Doppler imaging, a well-formed flow convergence proximal isovelocity surface area (PISA) shell was visualized on the ventricular side of the mitral valve in systole. In addition, the following was noted: Maximal mitral regurgitation PISA radius 1.0 cm, Aliasing velocity at which PISA radius measured 45 cm/sec, Peak velocity of mitral regurgitation jet 500 cm/sec, Velocity-time integral of mitral regurgitation 140 cm. The following statement is TRUE:",
      "options": [
          "A. Vena contracta of the mitral regurgitant flow is expected to be less than 0.3 cm.",
          "B. Effective regurgitant orifice area of mitral regurgitation is approximately 0.6 cm².",
          "C. Instantaneous flow rate across the mitral valve using the PISA method is 70 ml per second.",
          "D. Mitral regurgitation is moderate (2+).",
          "E. Regurgitant volume is 40 ml/beat."
      ],
      "explanationImage": "https://alhadi415.github.io/top/images/7_5e.JPG",
      "questionImage": "https://alhadi415.github.io/top/images/7_5q.JPG",
      "answer": "B. Effective regurgitant orifice area of mitral regurgitation is approximately 0.6 cm².",
      "explanation": ""
  },
  // Question 6: Pulmonary Artery Wedge Pressure
  {
      "question": "An 84-year-old obese woman with a history of hypertension and chronic renal insufficiency became very short of breath at a rehabilitation facility 2 weeks after elective hip replacement. Transthoracic echocardiogram revealed normal left ventricular systolic function, no mitral or aortic valve disease, and the following: Peak velocity of the mitral E wave 125 cm/sec, Flow propagation velocity of mitral inflow on color M mode 31 cm/sec, Peak velocity of tricuspid regurgitant jet 4 m/sec, Estimated right atrial pressure 15 mm Hg. The following statement is TRUE:",
      "options": [
          "A. Mean pulmonary artery wedge pressure is markedly elevated.",
          "B. On mitral inflow, E to A ratio is expected to be less than 1.",
          "C. Pulmonary artery systolic pressure is 64 mm Hg.",
          "D. The ratio of peak E-wave velocity to the peak medial mitral annular tissue Doppler velocity is expected to be less than 8.",
          "E. Flow propagation velocity of mitral inflow on color M mode is normal for her age."
      ],
      "explanationImage": "https://alhadi415.github.io/top/images/7_6e.JPG",
      "answer": "A. Mean pulmonary artery wedge pressure is markedly elevated.",
      "explanation": ""
  },
  // Question 7: Aortic Regurgitation
  {
      "question": "A 44-year-old man with a trileaflet aortic valve and a dilated aortic root measuring 5.5 cm at the level of sinuses of Valsalva is being evaluated for aortic regurgitation. The following statement is TRUE:",
      "options": [
          "A. Regurgitant fraction of 65% would indicate that the aortic regurgitation is severe.",
          "B. Like the size of flow convergence (PISA) radius, the size of vena contracta is strongly influenced by Nyquist limit setting.",
          "C. Vena contracta of at least 0.2 cm would indicate that the aortic regurgitation is severe.",
          "D. Regurgitant volume of 30 ml per beat is consistent with severe aortic regurgitation.",
          "E. Vena contracta obtained by 2D echocardiography can be used to calculate regurgitant volume."
      ],
      "explanationImage": "https://alhadi415.github.io/top/images/7_7e.JPG",
      "answer": "A. Regurgitant fraction of 65% would indicate that the aortic regurgitation is severe.",
      "explanation": ""
  },
  // Question 8: Left Atrial Pressure Estimation
  {
      "question": "A 62-year-old man with a history of treated hypertension, chronic atrial fibrillation, and bicuspid aortic valve had a transthoracic echocardiogram done. The study showed the following: Peak velocity of mitral regurgitant jet 6.0 m/sec, dP/dt of mitral regurgitant jet 1,900 mm Hg/sec, Ratio of peak mitral E wave to peak velocity of medial mitral annulus (E/e') 16, Vena contracta of mitral regurgitation 0.2 cm. Systemic blood pressure at the time of the study was 120/70 mm Hg. The following statement is TRUE:",
      "options": [
          "A. Peak-to-peak aortic gradient is 90 mm Hg.",
          "B. Patient is in cardiogenic shock due to left ventricular systolic dysfunction.",
          "C. Mean left atrial pressure is approximately 20 mm Hg.",
          "D. The size of vena contracta is diagnostic of severe mitral regurgitation.",
          "E. Left atrial pressure cannot be estimated by the E/e' method in patients with atrial fibrillation."
      ],
      "explanationImage": "https://alhadi415.github.io/top/images/7_8e.JPG",
      "questionImage": "https://alhadi415.github.io/top/images/7_8q.JPG",
      "answer": "C. Mean left atrial pressure is approximately 20 mm Hg.",
      "explanation": ""
  },
  // Question 9: Aortic Regurgitation
  {
      "question": "A 67-year-old man with aortic regurgitation underwent transthoracic echocardiographic examination. There was no mitral stenosis or regurgitation. The following values were obtained: Peak diastolic velocity of aortic regurgitant jet 5.0 m/sec, End-diastolic velocity of aortic regurgitant jet 3.7 m/sec, Pressure half-time of aortic regurgitant jet 656 msec, Peak aortic antegrade flow velocity 2.2 m/sec, Blood pressure 130/65 mm Hg. Based on the above data, one can conclude:",
      "options": [
          "A. Pressure half-time is consistent with severe aortic regurgitation.",
          "B. Aortic valve area can be estimated as 220 divided by pressure half-time.",
          "C. Peak left ventricular systolic pressure is lower than the systolic blood pressure.",
          "D. Left ventricular end-diastolic pressure is estimated at 10 mm Hg.",
          "E. Aortic valve area cannot be calculated using continuity equation because there is aortic regurgitation."
      ],
      "explanationImage": "https://alhadi415.github.io/top/images/7_9e.JPG",
      "questionImage": "https://alhadi415.github.io/top/images/7_9q.JPG",
      "answer": "D. Left ventricular end-diastolic pressure is estimated at 10 mm Hg.",
      "explanation": ""
  },
  // Question 10: Atrial Septal Defect (ASD)
  {
      "question": "A 25-year-old woman is being evaluated for percutaneous closure of her secundum atrial septal defect (ASD). Transthoracic echocardiography demonstrated mild tricuspid regurgitation, no pulmonic stenosis, and the following: Pulmonary artery systolic pressure 65 mm Hg, Pulmonary artery diastolic pressure 35 mm Hg, Left atrial pressure 10 mm Hg, Right ventricular outflow tract (RVOT) diameter 2.6 cm, RVOT velocity-time integral 30 cm, Left ventricular outflow tract (LVOT) diameter 2.0 cm, LVOT velocity-time integral 20 cm, Heart rate 75 bpm. Based on the above data, one can conclude:",
      "options": [
          "A. Patient should be advised against ASD closure because pulmonary hypertension is present.",
          "B. Pulmonary vascular resistance is approximately 16 Wood units.",
          "C. The ratio of pulmonary to systemic blood flow (Qp:Qs) is approximately 2.5:1.",
          "D. Shunt flow is larger than the pulmonic flow (Qp).",
          "E. Patient is cyanotic."
      ],
      "explanationImage": "https://alhadi415.github.io/top/images/7_10e.JPG",
      "questionImage": "https://alhadi415.github.io/top/images/7_10q.JPG",
      "answer": "C. The ratio of pulmonary to systemic blood flow (Qp:Qs) is approximately 2.5:1.",
      "explanation": ""
  },
  // Question 11: Ventricular Septal Defect (VSD)
  {
      "question": "A 35-year-old woman was noted on clinical exam to have a systolic murmur and was referred for transthoracic echocardiography. The exam revealed perimembranous ventricular septal defect (VSD), mild tricuspid regurgitation, pulmonic stenosis, intact aortic valve, and the following: Blood pressure 120/80 mm Hg, Peak systolic velocity across the VSD 3.0 m/sec, End-diastolic velocity across the VSD 1.0 m/sec, Estimated right atrial pressure 10 mm Hg, Peak systolic gradient across pulmonic valve 55 mm Hg, Left ventricular end-diastolic pressure 12 mm Hg. The following statement is TRUE:",
      "options": [
          "A. Right ventricular systolic pressure is 46 mm Hg.",
          "B. Pulmonary artery systolic pressure is 29 mm Hg.",
          "C. Right ventricular systolic pressure is 84 mm Hg above the right atrial pressure.",
          "D. Pulmonary artery systolic pressure is 45 mm Hg higher than the right ventricular systolic pressure.",
          "E. Right ventricular end-diastolic pressure is 28 mm Hg."
      ],
      "explanationImage": "https://alhadi415.github.io/top/images/7_11e.JPG",
      "questionImage": "https://alhadi415.github.io/top/images/7_11q.JPG",
      "answer": "B. Pulmonary artery systolic pressure is 29 mm Hg.",
      "explanation": ""
  },
  // Question 12: Atrial Septal Defect (ASD)
  {
      "question": "A 21-year-old college student is noted to have fixed splitting of the second heart sound and right bundle branch block. Real-time three-dimensional transesophageal echocardiogram revealed a 1.2 cm secundum ASD that was circular in shape. On color Doppler, a well-formed hemispheric flow convergence (PISA) shell is seen on the left atrial side of the ASD. The following data were also obtained: Blood pressure 120/80 mm Hg, Heart rate 100 bpm, PISA radius 0.7 cm, Velocity-time integral of left-to-right flow across ASD 80 cm, Left ventricular outflow tract (LVOT) diameter 2.0 cm, LVOT velocity-time integral 19 cm. The following statement is true:",
      "options": [
          "A. Ratio of pulmonic to systemic flow (Qp:Qs) is 1.8:1.0.",
          "B. Shunt flow across the ASD is approximately 9.0 l/minute.",
          "C. The difference between the pulmonic and systemic stroke volume is 180 ml.",
          "D. Systemic stroke volume is 150 ml.",
          "E. Pulmonic blood flow (Qp) is approximately 7.0 l/min."
      ],
      "questionImage": "https://alhadi415.github.io/top/images/7_12.JPG",
      "explanationImage": "https://alhadi415.github.io/top/images/7_12e.JPG",
      "answer": "B. Shunt flow across the ASD is approximately 9.0 l/minute.",
      "explanation": ""
  },
  // Question 13: Mitral Regurgitation
  {
      "question": "A 35-year-old woman presented with sudden onset of dyspnea and pulmonary edema. She underwent bedside transthoracic echocardiography which revealed hyperdynamic left ventricular systolic function, normal aortic valve, and mitral regurgitation. The following data were obtained at the time of transthoracic echocardiogram: Blood pressure 95/50 mm Hg, Heart rate 120 bpm, Peak velocity of mitral regurgitant jet 4.0 m/sec, Time interval from onset of mitral regurgitation to jet velocity of 1 m/sec 5 msec, Time interval from onset of mitral regurgitation to jet velocity of 3 m/sec 25 msec, Vena contracta of mitral regurgitation 0.8 cm. The following statement is TRUE:",
      "options": [
          "A. Peak velocity of the mitral inflow E wave is expected to be low.",
          "B. Left atrial pressure is low.",
          "C. Pulmonary venous flow velocity pattern on spectral Doppler is likely to reveal flow reversal during early diastole.",
          "D. Rate of pressure rise (dP/dt) in the left ventricle is 1,600 mm Hg per second.",
          "E. Left ventricular systolic function is markedly diminished."
      ],
      "explanationImage": "https://alhadi415.github.io/top/images/7_13e.JPG",
      "questionImage": "https://alhadi415.github.io/top/images/7_13q.JPG",
      "answer": "D. Rate of pressure rise (dP/dt) in the left ventricle is 1,600 mm Hg per second.",
      "explanation": ""
  },
  // Question 14: Mitral Stenosis
  {
      "question": "A 29-year-old Bangladeshi woman with rheumatic mitral stenosis is referred to the cardiac catheterization lab for percutaneous mitral balloon valvuloplasty. Upon placement of the pigtail catheter in the left ventricle, the following values were obtained: Left ventricular peak systolic pressure 124 mm Hg, Early left ventricular diastolic pressure 7 mm Hg, Left ventricular end-diastolic pressure 10 mm Hg. Transesophageal echocardiogram prior to valvuloplasty revealed the absence of both mitral and aortic regurgitation, as well as the following: Heart rate 104 bpm, Time-velocity integral of diastolic mitral flow 65 cm, Mean mitral valve gradient in diastole 21 mm Hg, Mitral pressure half-time 270 msec. The following statement is TRUE:",
      "options": [
          "A. Mean left atrial pressure is expected to be lower than the mean left ventricular diastolic pressure.",
          "B. Peak velocity of the mitral inflow E wave is expected to be low.",
          "C. Pressure half-time may be unreliable in patients prior to valvuloplasty.",
          "D. Mitral valve area is 0.6 cm².",
          "E. Mean left atrial pressure is approximately 28 mm Hg."
      ],
      "questionImage": "https://alhadi415.github.io/top/images/7_14.JPG",
      "explanationImage": "https://alhadi415.github.io/top/images/7_14e.JPG",
      "answer": "E. Mean left atrial pressure is approximately 28 mm Hg.",
      "explanation": ""
  },
  // Question 15: Aortic Valve Stenosis
  {
      "question": "An 81-year-old woman with a systolic heart murmur was referred for an echocardiogram. A heavily calcified aortic valve and normal mitral valve were noted on 2D imaging. Doppler echocardiography of the aortic valve revealed: Left ventricular outflow tract (LVOT) diameter 1.9 cm, Peak velocity across the aortic valve 5.0 m/sec, Peak LVOT velocity 1.0 m/sec, LVOT velocity-time integral (VTI) 20 cm. The following statement is TRUE:",
      "options": [
          "A. Aortic valve area cannot be calculated because aortic valve velocity-time integral is not stated.",
          "B. Aortic valve stenosis is subvalvular.",
          "C. Aortic valve area is likely to be less than 1 cm².",
          "D. Left ventricular stroke volume is 80 ml per beat.",
          "E. Systolic blood pressure is approximately 100 mm Hg above the left ventricular systolic pressure."
      ],
      "explanationImage": "https://alhadi415.github.io/top/images/7_15e.JPG",
      "questionImage": "https://alhadi415.github.io/top/images/7_15q.JPG",
      "answer": "C. Aortic valve area is likely to be less than 1 cm².",
      "explanation": ""
  },
  // Question 16: Tricuspid Regurgitation
  {
      "question": "This continuous-wave spectral Doppler tracing of the tricuspid regurgitant jet comes from an 18-year-old woman with pulmonic valve stenosis (Fig. 7-1). The peak pulmonic valve gradient is 24 mm Hg. Right atrial pressure is estimated at 10 mm Hg. The following is TRUE about this patient:",
      "options": [
          "A. Peak pulmonary artery systolic pressure is higher than the right ventricular peak systolic pressure.",
          "B. Right ventricular peak systolic pressure is 64 mm Hg above than the pulmonary artery peak systolic pressure.",
          "C. Pulmonary artery peak systolic pressure is 50 mm Hg.",
          "D. Right ventricular peak systolic pressure is 24 mm Hg less than the peak pulmonary artery systolic pressure.",
          "E. Right ventricular peak systolic pressure is 108 mm Hg."
      ],
      "explanationImage": "https://alhadi415.github.io/top/images/7_16e.JPG",
      "questionImage": "https://alhadi415.github.io/top/images/7_16q.JPG",
      "answer": "C. Pulmonary artery peak systolic pressure is 50 mm Hg.",
      "explanation": ""
  },
  // Question 17: Aortic Valve Stenosis
  {
      "question": "An 82-year-old man was referred for evaluation of a systolic ejection murmur. On parasternal long-axis view, the left ventricular outflow tract diameter was measured at 2.0 cm. Spectral Doppler tracings were obtained in or through the left ventricular outflow tract in the apical 5-chamber view (Fig. 7-2). The following statement is TRUE:",
      "options": [
          "A. Increased cardiac output alone may explain the elevated gradient across the aortic valve.",
          "B. Marked difference between the subvalvular and valvular velocities in this patient may also be seen in severe aortic regurgitation.",
          "C. Patient has a very severe aortic valve stenosis with a mean gradient of approximately 60 mm Hg.",
          "D. Aortic valve area is greater than 1.0 cm².",
          "E. Patient has hypertrophic obstructive cardiomyopathy (HOCM)."
      ],
      "explanationImage": "https://alhadi415.github.io/top/images/7_17e.JPG",
      "questionImage": "https://alhadi415.github.io/top/images/7_17q.JPG",
      "answer": "C. Patient has a very severe aortic valve stenosis with a mean gradient of approximately 60 mm Hg.",
      "explanation": ""
  },
  // Question 18: Pulmonic Valve Regurgitation
  {
      "question": "The continuous-wave spectral Doppler tracing in Figure 7-3, from a 21-year-old woman represents the flow velocity profile in the main pulmonary artery. Based on this tracing, the following is TRUE about this patient:",
      "options": [
          "A. End-diastolic gradient across the pulmonic valve is high.",
          "B. There is severe pulmonic valve stenosis.",
          "C. Pulmonary artery systolic pressure is 9 mm Hg above the right ventricular pressure.",
          "D. Pulmonic valve regurgitation is severe.",
          "E. The velocity profile is diagnostic of PDA."
      ],
      "explanationImage": "https://alhadi415.github.io/top/images/7_18e.JPG",
      "questionImage": "https://alhadi415.github.io/top/images/7_18q.JPG",
      "answer": "D. Pulmonic valve regurgitation is severe.",
      "explanation": ""
  },
  // Question 19: Left Atrial Pressure
  {
      "question": "The tracings in Figure 7-4 were obtained from an 82-year-old woman with a normal left ventricular ejection fraction of 65%. Figure 7-4A represents blood flow velocity pattern obtained by placing a pulsed Doppler sample volume at the mitral leaflet tips. Figure 7-4B represents tissue Doppler of the lateral mitral annulus. Based on these two tracings, the following is TRUE:",
      "options": [
          "A. The patient has excellent exercise capacity.",
          "B. Abnormal left ventricular relaxation alone explains the mitral inflow pattern.",
          "C. Left atrial pressure is elevated.",
          "D. Patient has normal left ventricular diastolic function.",
          "E. Mitral E-wave velocity is expected to increase following the Valsalva maneuver."
      ],
      "explanationImage": "https://alhadi415.github.io/top/images/7_19e.JPG",
      "questionImage": "https://alhadi415.github.io/top/images/7_19q.JPG",
      "answer": "C. Left atrial pressure is elevated.",
      "explanation": ""
  },
  // Question 20: Left Ventricular End-Diastolic Pressure
  {
      "question": "Figure 7-5A and B were obtained from the same patient at the same heart rate. The following statement is TRUE:",
      "options": [
          "A. Mitral inflow pattern is diagnostic of restrictive filling.",
          "B. Left ventricular end-diastolic pressure is elevated.",
          "C. The higher the peak velocity of the atrial reversal wave in pulmonary veins, the lower the left ventricular pressure.",
          "D. The absence of atrial reversal wave in pulmonary vein tracings indicates pulmonary hypertension due to left ventricular dysfunction.",
          "E. Ratio of peak systolic to peak diastolic velocity in pulmonary veins of more than 1 is indicative of elevated left atrial pressure."
      ],
      "explanationImage": "https://alhadi415.github.io/top/images/7_20e.JPG",
      "questionImage": "https://alhadi415.github.io/top/images/7_20q.JPG",
      "answer": "B. Left ventricular end-diastolic pressure is elevated.",
      "explanation": ""
  },
  // Question 21: Ventricular Interdependence
  {
      "question": "Upward deflection in respirometry recordings indicates inspiration while the downward deflection indicates expiration (Fig. 7-6). The following statement is TRUE:",
      "options": [
          "A. There is no ventricular interdependence.",
          "B. Expiratory increase in diastolic flow reversal in hepatic veins suggests constriction.",
          "C. Abnormal interventricular septal motion is due to right ventricular volume overload.",
          "D. Inspiratory increase in forward hepatic vein flow velocities is abnormal.",
          "E. Above M-mode recordings are diagnostic of a large pericardial effusion and tamponade."
      ],
      "explanationImage": "https://alhadi415.github.io/top/images/7_21e.JPG",
      "questionImage": "https://alhadi415.github.io/top/images/7_21q.JPG",
      "answer": "B. Expiratory increase in diastolic flow reversal in hepatic veins suggests constriction.",
      "explanation": ""
  },
  // Question 22: Aortic Coarctation
  {
      "question": "A 33-year-old man has had a murmur since childhood. The transthoracic spectral Doppler tracings in Figure 7-7 are obtained from the suprasternal view. The following statement is TRUE:",
      "options": [
          "A. The pattern of diastolic flow is indicative of severe aortic regurgitation.",
          "B. The tracings are diagnostic of aortic coarctation.",
          "C. Quadricuspid aortic valve is the most common cause of aortic stenosis associated with the above flow velocity pattern.",
          "D. The recordings are obtained from the ascending aorta and represent severe aortic stenosis.",
          "E. Patient's blood pressure in the legs is markedly higher than in the arms."
      ],
      "explanationImage": "https://alhadi415.github.io/top/images/7_22e.JPG",
      "questionImage": "https://alhadi415.github.io/top/images/7_22q.JPG",
      "answer": "B. The tracings are diagnostic of aortic coarctation.",
      "explanation": ""
  },
  // Question 23: Aortic Stenosis vs. Tricuspid Regurgitation
  {
      "question": "A 91-year-old woman presents with severe shortness of breath. The two spectral Doppler recordings in Figure 7-8 were obtained from two different valves. The vertical line in each tracing marks the onset of QRS. The following statement is TRUE:",
      "options": [
          "A. Figure 7-8 represents a tricuspid regurgitant jet and the patient has severely elevated right ventricular systolic pressure.",
          "B. Figure 7-8 represents severe aortic stenosis because the jet starts during the isovolumic contraction period.",
          "C. The jet with the shorter duration represents aortic stenosis.",
          "D. Peak velocity of 5.0 m/sec in Figure 7-8B is not compatible with a tricuspid regurgitant jet.",
          "E. Systolic function of both ventricles is severely diminished."
      ],
      "explanationImage": "https://alhadi415.github.io/top/images/7_23e.JPG",
      "questionImage": "https://alhadi415.github.io/top/images/7_23q.JPG",
      "answer": "C. The jet with the shorter duration represents aortic stenosis.",
      "explanation": ""
  },
  // Question 24: Tamponade vs. Constrictive Pericarditis
  {
      "question": "A 55-year-old man with hypertension treated with a beta blocker, and advanced gastric carcinoma presents with sudden onset of severe shortness of breath. The spectral pulsed Doppler recordings in Figure 7-9 were obtained at the mitral leaflet tips. Upward deflection in respirometry recordings indicates inspiration while the downward deflection indicates expiration. The following statement is TRUE:",
      "options": [
          "A. Respiratory variations in peak velocity of late diastolic flow (A wave) of more than 25% favor constriction over tamponade.",
          "B. Marked decrease in peak E-wave velocity seen at the onset of inspiration is consistent with the diagnosis of tamponade.",
          "C. Findings are characteristic of restrictive cardiomyopathy.",
          "D. The ratio of early to late diastolic peak mitral velocity (E/A ratio) of less than 1 favors the diagnosis of constrictive pericarditis.",
          "E. Treatment with diuretics would markedly improve patient’s shortness of breath."
      ],
      "explanationImage": "https://alhadi415.github.io/top/images/7_24e.JPG",
      "questionImage": "https://alhadi415.github.io/top/images/7_24q.JPG",
      "answer": "B. Marked decrease in peak E-wave velocity seen at the onset of inspiration is consistent with the diagnosis of tamponade.",
      "explanation": ""
  },
  // Question 25: Tricuspid Regurgitation
  {
      "question": "A 28-year-old man with liver disease presents with jugular venous distension (Fig. 7-10). The following statement is TRUE:",
      "options": [
          "A. Right atrial pressure rises progressively towards the end of ventricular systole.",
          "B. Right ventricular systolic function is markedly diminished.",
          "C. Peak velocity of 2.2 m/sec excludes the diagnosis of pulmonary hypertension.",
          "D. Tricuspid regurgitation is likely mild.",
          "E. There is right ventricular midcavitary gradient during systole."
      ],
      "explanationImage": "https://alhadi415.github.io/top/images/7_25e.JPG",
      "questionImage": "https://alhadi415.github.io/top/images/7_25q.JPG",
      "answer": "A. Right atrial pressure rises progressively towards the end of ventricular systole.",
      "explanation": ""
  },
  // Question 26: Mitral Flow Velocity Pattern
  {
      "question": "A 78-year-old obese woman with a history of hypertension and poorly controlled diabetes mellitus developed progressive chest pain and shortness of breath for the past 2 days. She had no prior history of coronary revascularization or heart surgery. Her son brought her to the emergency department where she was noted to be diaphoretic and tachypneic. Electrocardiogram in the emergency department revealed normal sinus rhythm, right bundle branch block, and ST elevation in anteroseptal leads. Blood pressure 80/50 mm Hg, heart rate 100 beats per minute, oral temperature 98.7 degrees. On auscultation, there was S3 and no murmur. Serum troponin was elevated at 40 ng/ml (normal <5 ng/ml). There was marked pulmonary edema on chest X-ray. Transthoracic echocardiogram at the time of presentation revealed hypokinesis of six left ventricular segments supplied by the left anterior descending artery; ejection fraction was estimated at 40%. There was mild regurgitation of a structurally normal native mitral valve. The patient was transferred to the intensive care unit where a Swan-Ganz catheter was placed. Pulmonary artery wedge pressure was 38 mm Hg. Tissue Doppler of the medial mitral annulus and pulsed Doppler recordings with the sample volume at the tips of the mitral valve leaflets were obtained at that time. Patient was in normal sinus rhythm. Peak velocity of the early annular tissue Doppler wave (e') was 5 cm/sec. Which of the following mitral flow velocity patterns is the most likely at this time?",
      "options": [
          "A. Figure 7-11A",
          "B. Figure 7-11B",
          "C. Figure 7-11C",
          "D. Figure 7-11D",
          "E. Figure 7-11E"
      ],
      "explanationImage": "https://alhadi415.github.io/top/images/7_26e.JPG",
      "questionImage": "https://alhadi415.github.io/top/images/7_26q.JPG",
      "answer": "C. Figure 7-11C",
      "explanation": ""
  },
  // Question 27: Mitral Regurgitation Severity
  {
      "question": "From the emergency department, she was taken for coronary angiogram which revealed total occlusion of the proximal anterior descending artery and diffuse atherosclerosis in the left circumflex artery. Percutaneous coronary intervention was attempted but the stent could not be deployed in the left anterior descending artery. She was then transferred to the intensive care unit. After appropriate medical therapy, she was discharged home free of symptoms on hospital day five. Three days later, she collapsed. Her neighbor called 911 and the patient was intubated in the field for severe hypoxemia. On admission, she was afebrile. Laboratory data revealed normal white blood cell count. Chest X-ray in the emergency department demonstrated massive bilateral pulmonary edema. The following data were obtained by echocardiography the same day (Fig. 7-12 and Video 7-1). The degree of mitral regurgitation is:",
      "options": [
          "A. Trivial",
          "B. Mild (1+)",
          "C. Moderate (2+)",
          "D. Moderate to severe (3+)",
          "E. Severe (4+)"
      ],
      "explanationImage": "https://alhadi415.github.io/top/images/7_27e.JPG",
      "questionImage": "https://alhadi415.github.io/top/images/7_27q.JPG",
      "answer": "E. Severe (4+)",
      "explanation": ""
  },
  // Question 28: Etiology of Mitral Regurgitation
  {
      "question": "The most likely etiology of mitral regurgitation in this patient is:",
      "options": [
          "A. Papillary muscle rupture",
          "B. Bacterial endocarditis",
          "C. Mitral annular dilatation",
          "D. Rheumatic heart disease",
          "E. Mitral valve prolapse"
      ],
      "explanationImage": "https://alhadi415.github.io/top/images/7_28e.JPG",
      "answer": "A. Papillary muscle rupture",
      "explanation": ""
  },
  // Question 29: Patent Ductus Arteriosus (PDA)
  {
      "question": "The spectral Doppler tracing in Figure 7-13 represents flow across the PDA obtained by transthoracic echocardiography. The following statement is TRUE:",
      "options": [
          "A. Pulmonary artery diastolic pressure is 21 mm Hg above the right atrial pressure.",
          "B. The tracing was obtained by pulsed wave Doppler technique.",
          "C. Pulmonary artery pressure is estimated at 26/12 mm Hg.",
          "D. Pulmonary artery systolic pressure is 110 mm Hg.",
          "E. PDA is very large because the flow occurs throughout the cardiac cycle."
      ],
      "explanationImage": "https://alhadi415.github.io/top/images/7_29e.JPG",
      "questionImage": "https://alhadi415.github.io/top/images/7_29q.JPG",
      "answer": "C. Pulmonary artery pressure is estimated at 26/12 mm Hg.",
      "explanation": ""
  },
  // Question 30: Patent Ductus Arteriosus (PDA)
  {
      "question": "This transthoracic echocardiographic color Doppler image in the parasternal short-axis view at the level of the PDA comes from the same study as the spectral tracing in previous question (Fig. 7-14). Using the PISA method, the cross-sectional area of the PDA at its aortic end during maximum flow is:",
      "options": [
          "A. 0.01 cm²",
          "B. 0.13 cm²",
          "C. 0.22 cm²",
          "D. 1.3 cm²",
          "E. 2.2 cm²"
      ],
      "explanationImage": "https://alhadi415.github.io/top/images/7_30e.JPG",
      "questionImage": "https://alhadi415.github.io/top/images/7_30q.JPG",
      "answer": "B. 0.13 cm²",
      "explanation": ""
  },
  // Question 31: Hypertrophic Obstructive Cardiomyopathy (HOCM)
  {
      "question": "Transthoracic echocardiogram performed in the emergency department demonstrated hypertrophic cardiomyopathy with asymmetric septal hypertrophy, systolic anterior motion, and normal left ventricular systolic function. Aortic valve was normal. Left atrial pressure was estimated at 10 mm Hg. There was eccentric mitral regurgitation; and the spectral Doppler of the mitral regurgitant jet is depicted in Figure 7-15. The following statement is TRUE:",
      "options": [
          "A. Envelope of the mitral regurgitant jet is not fully recorded because the early systolic portion of the jet is missing.",
          "B. Left ventricular systolic pressure is low.",
          "C. Maximal instantaneous left ventricular outflow gradient is 122 mm Hg.",
          "D. Mitral regurgitation is partly diastolic.",
          "E. Peak left ventricular systolic pressure is 246 mm Hg."
      ],
      "questionImage": "https://alhadi415.github.io/top/images/7_31.JPG",
      "explanationImage": "https://alhadi415.github.io/top/images/7_31e.JPG",
      "answer": "C. Maximal instantaneous left ventricular outflow gradient is 122 mm Hg.",
      "explanation": ""
  },
  // Question 32: Hypertrophic Obstructive Cardiomyopathy (HOCM)
  {
      "question": "The patient was started on oral disopyramide. Repeat echocardiogram was obtained and the spectral tracing in Figure 7-16 was obtained. Left atrial pressure was again estimated at 10 mm Hg. Otherwise, there were no significant changes on his echocardiogram. The following statement is TRUE:",
      "options": [
          "A. The shape of the mitral regurgitant jet is now suggestive of mitral valve prolapse with click and systolic murmur.",
          "B. Flow velocity pattern of jet #2 is typical of valvular aortic stenosis.",
          "C. Left ventricular outflow gradient has dropped by about 50% compared to the initial echocardiogram.",
          "D. Patient has developed intracavitary gradient as demonstrated by jet #1.",
          "E. Peak left ventricular systolic pressure is now 159 mm Hg minus the left atrial pressure."
      ],
      "explanationImage": "https://alhadi415.github.io/top/images/7_32e.JPG",
      "questionImage": "https://alhadi415.github.io/top/images/7_32q.JPG",
      "answer": "C. Left ventricular outflow gradient has dropped by about 50% compared to the initial echocardiogram.",
      "explanation": ""
  },
  // Question 33: Left Atrial Volume Index
  {
      "question": "To calculate the left atrial volume, the data in Figure 7-17 were obtained: Apical 4-Chamber View Area 27 cm², Length 5.9 cm; Apical 2-Chamber View Area 26 cm², Length 5.6 cm. The left atrial volume index is approximately:",
      "options": [
          "A. 20 ml/m²",
          "B. 30 ml/m²",
          "C. 40 ml/m²",
          "D. 50 ml/m²",
          "E. 60 ml/m²"
      ],
      "explanationImage": "https://alhadi415.github.io/top/images/7_33e.JPG",
      "questionImage": "https://alhadi415.github.io/top/images/7_33q.JPG",
      "answer": "D. 50 ml/m²",
      "explanation": ""
  },
  // Question 34: Mitral Inflow and Pulmonary Venous Flow
  {
      "question": "Mitral inflow and pulmonary venous flow velocity spectral Doppler tracings were obtained on admission and after 5 days of appropriate medical therapy including intravenous diuretics (Fig. 7-18). The following was the result of the appropriate medical therapy:",
      "options": [
          "A. Left ventricular preload has increased.",
          "B. Left atrial pressure has decreased.",
          "C. Left ventricular systolic function has improved.",
          "D. Mitral regurgitation has worsened.",
          "E. Pulmonary artery pressure has increased."
      ],
      "explanationImage": "https://alhadi415.github.io/top/images/7_34e.JPG",
      "questionImage": "https://alhadi415.github.io/top/images/7_34q.JPG",
      "answer": "B. Left atrial pressure has decreased.",
      "explanation": ""
  },
  // Question 35: Constrictive Pericarditis
  {
      "question": "Figure 7-20 was also obtained on the echocardiogram. In these recordings, the upstroke of the respirometry curve denotes inspiration, and the downstroke indicates expiration. The following is true:",
      "options": [
          "A. Restrictive cardiomyopathy of the left ventricle is present.",
          "B. Right atrial pressure is low.",
          "C. Left ventricular flow propagation velocity (Vp) is abnormal.",
          "D. Patient has constrictive pericarditis.",
          "E. Degree of respiratory variations in the mitral inflow is normal."
      ],
      "explanationImage": "https://alhadi415.github.io/top/images/7_35e.JPG",
      "questionImage": "https://alhadi415.github.io/top/images/7_35q.JPG",
      "answer": "D. Patient has constrictive pericarditis.",
      "explanation": ""
  },
  // Question 36: Ventricular Interdependence
  {
      "question": "Video 7-2, obtained in the apical 4-chamber view demonstrates abnormal septal motion which is due to:",
      "options": [
          "A. Right ventricular pressure overload.",
          "B. Right ventricular volume overload.",
          "C. Left bundle branch block.",
          "D. Ventricular interdependence.",
          "E. Cardiac surgery."
      ],
      "explanationImage": "https://alhadi415.github.io/top/images/7_36e.JPG",
      "answer": "D. Ventricular interdependence.",
      "explanation": ""
  }
];