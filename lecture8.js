const questions = [
    // Question 1
    {
        "question": "Compared with standard Doppler, tissue Doppler settings make use of",
        "options": [
            "A. The lesser reflectivity of tissue.",
            "B. The faster motion of tissue.",
            "C. Filters to exclude highly reflective tissue.",
            "D. Filters to exclude higher velocities."
        ],
        "answer": "D. Filters to exclude higher velocities.",
        "explanation": "Standard Doppler measures blood flow velocities on the basis of the Doppler effect. The change in frequency between transmitted sound and reflected sound is termed the 'Doppler shift' and is used to calculate the velocity of the moving blood. Blood is a relatively weak reflector of sound waves and moves at a relatively high velocity; therefore, in standard Doppler, filters are used to exclude highly reflective and low-velocity objects, like myocardium so that the range of velocities to be measured is maximized. Conversely, since tissue moves at a slower velocity but has a higher reflectivity, DTI employs filters, which exclude low-intensity reflectors and higher velocities."
    },

    // Question 2
    {
        "question": "Strain rate for tissue Doppler is defined as",
        "options": [
            "A. Measured tissue velocity × time.",
            "B. Absolute difference in velocities.",
            "C. The change in velocity between two points divided by the end distance.",
            "D. The change in distance between two points divided by the initial distance."
        ],
        "answer":  "C. The change in velocity between two points divided by the end distance.",
        "explanation": "Based upon the information obtained from DTI about myocardial velocities, other variables related to myocardial motion can be determined. For example, the distance traveled by a measured point in the myocardium can be determined (velocity × time); and if two points are measured simultaneously, the velocity gradients between these two points can be determined. The change in distance of two points in the myocardium divided by the initial length or end diastolic length (end diastolic length—end systolic length/end diastolic length) is also known as myocardial strain. The strain rate (SR) is the first derivative of strain and is defined as the change in velocity between two points divided by the distance between the two points at the end of systole (L). SR = (V1 - V2)/L."
    },

    // Question 3
    {
        "question": "Which is correct regarding Doppler strain?",
        "options": [
            "A. Doppler-derived strain may be obtained in any direction from a single view.",
            "B. Doppler-derived strain is more dependent on translational motion than tissue velocity imaging.",
            "C. Doppler-derived systolic strain rate correlates with indices of contractility.",
            "D. Doppler-derived strain has lower spatial and temporal resolution than magnetic resonance imaging strain."
        ],
        "answer":   "C. Doppler-derived systolic strain rate correlates with indices of contractility.",

        "explanation": "The standard Doppler equation is expressed as: Δf = (2 f0 × v × cos θ)/c where Δf is the frequency shift, f0 the transmitted frequency, c the speed of sound in blood, and θ the angle of the beam in relation to direction of blood flow. If θ = 0 (parallel to direction of movement), then the cosine of 0 is 1. As the angle or θ increases, the cosine becomes progressively less than 1 resulting in an underestimation of Doppler shift and therefore peak velocity. Tissue Doppler is also dependent on θ when velocities are measured and is limited to interrogating segments aligned in parallel with the Doppler angle of incidence. Tissue velocity imaging is unable to discriminate passive motion from active deformation; however, strain is a measure of active tissue motion. Because of this ability to measure active tissue motion, there is a close correlation between strain rate and indices of LV contractility."
    },

    // Question 4
    {
        "question": "Which is the best acoustic window to obtain the Doppler-derived radial strain of the anterior wall?",
        "options": [
            "A. Parasternal long axis.",
            "B. Parasternal short axis.",
            "C. Apical four chamber.",
            "D. Apical two chamber.",
            "E. Subcostal."
        ],"explanationImage": "https://alhadi415.github.io/top/images/8_4e.JPG",
        "answer":  "B. Parasternal short axis.",
        "explanation": "The spiral architecture of the myocardial fiber bundles determines strain deformation in multiple directions. Also, it is important to recall that the angle of incidence of the Doppler beam on the area of interest contributes to an accurate estimation of velocity by the Doppler equation: Δf = (2 f0 × v × cos θ)/c. Taking both the spiral architecture and the angle of incidence into account, changes in LV geometry during systole relate primarily to radial (short-axis), longitudinal (long-axis), and meridional (LV-torsion) strain. Therefore, radial strain (ef) of the anterior wall is best measured from the parasternal short-axis view."
    },

    // Question 5
    {
        "question": "Which of the following hemodynamic parameters best correlates with a combination of mitral E-wave velocity and early diastolic longitudinal velocities of the myocardium (e')?",
        "options": [
            "A. Superior vena cava pressure.",
            "B. Right atrial pressure.",
            "C. Right ventricular systolic pressure.",
            "D. Mean left atrial pressure."
        ],
        "answer": "D. Mean left atrial pressure.",
        "explanation": "The early diastolic velocity of the longitudinal motion of the myocardium (e') reflects the rate of myocardial relaxation. Decreased e' is one of the earliest signs of diastolic dysfunction and is present in all stages of diastolic dysfunction. Because e' velocity is reduced and mitral E velocity increase with higher filling pressures, the ratio between E and e' correlates well with LV filling pressures. This combination of early mitral E velocity and early diastolic longitudinal velocities of the myocardium has a linear relationship to the pulmonary capillary wedge pressure or mean left atrial pressure. This relationship persists even in patients with tachycardia as well as atrial fibrillation. There is debate to whether this relationship holds in the acutely decompensated patient with congestive heart failure."
    },

    // Question 6
    {
        "question": "Compared with Doppler-derived strain, speckle-tracking strain:",
        "options": [
            "A. Provides no discernible advantage.",
            "B. Can be performed independent of grayscale distribution.",
            "C. Is based on the Doppler shift of reflected sound waves.",
            "D. Does not rely on a particular angle of imaging with respect to tissue motion."
        ],
        "answer":             "D. Does not rely on a particular angle of imaging with respect to tissue motion.",

        "explanation": "One of the special characteristics of static B-scan ultrasound imaging is an appearance of speckle patterns within the tissue, which are the result of constructive and destructive interference of ultrasound back-scattered from structures smaller than a wavelength of ultrasound. This speckle pattern is unique for each myocardial region and is relatively stable throughout the cardiac cycle. Myocardial motion can be analyzed by tracking the movement of these speckles by filtering out random speckles and then performing an autocorrelation to estimate the motion of stable structures. Speckle-tracking technology has the advantage of measuring tissue velocities and deformation in an angle-independent fashion. It relies on a consistent and distinct grayscale pattern. This information is fed through a pattern recognition algorithm to track the displacement of the speckles in both dimensions of the two-dimensional image. Because this analysis is not based on the Doppler shift of reflected sound waves, it is not angle dependent and can be performed on regular two-dimensional images."
    },

    // Question 7
    {
        "question": "Which of the following radial strain rates obtained at the mid-inferior wall during systole of a patient with ischemic cardiomyopathy is consistent with dyskinesis?",
        "options": [
            "A. 0.",
            "B. 1.",
            "C. -1.",
            "D. 10."
        ],
        "answer": "C. -1.",
        "explanation": "Strain rate (e) imaging simultaneously measures the velocities in two adjacent points as well as the relative distance between these two points. Expressed as: ε = (V1 - V2)/L. Positive radial strain rate represents active contraction. Negative values for radial strain represent either relaxation (if measured during diastole) or dyskinesis (if measured during systole)."
    },

    // Question 8
    {
        "question": "In left ventricular (LV) torsion:",
        "options": [
            "A. During systole, the basal segments of the LV myocardium rotate counterclockwise.",
            "B. During systole, the apical segments rotate counterclockwise.",
            "C. During diastole, the basal segments of the LV myocardium rotate counterclockwise.",
            "D. Basal twisting is the main component of LV systolic torsion."
        ],
        "answer": "A. During systole, the basal segments of the LV myocardium rotate counterclockwise.",
        "explanation": "The LV myocardium has a spiral architecture with myocardial fibers that vary in orientation depending on where in the myocardium they are located. Fiber direction is predominantly longitudinal in the endocardial region, transitioning into a circumferential direction in the mid wall and becoming longitudinal again over the epicardial surface. In addition to radial and longitudinal deformation, there is torsional deformation of the LV during the cardiac cycle due to the helical orientation of the myocardial fibers. During systole, the basal segments of the LV myocardium rotate or twist in counterclockwise direction, whereas the apical segments twist in clockwise direction. During diastole, untwisting occurs in the opposite direction. Systolic torsion represents the net effect of basal and apical twist. Apical twisting is the main component of global LV systolic torsion, and in the next diastole, the apical untwisting also plays the dominant role, whereas basal rotation is of less importance."
    },

    // Question 9
    {
        "question": "Which of the following is a true statement about Doppler tissue imaging (DTI)?",
        "options": [
            "A. It is more preload dependent than traditional Doppler imaging.",
            "B. A normal velocity and pattern of mitral annular velocities does not always indicate normal diastolic function.",
            "C. It is unable to discriminate passive motion from active motion.",
            "D. M-mode color DTI has lower spatial resolution than pulsed DTI."
        ],
        "answer":  "C. It is unable to discriminate passive motion from active motion.",
        "explanation": "Standard Doppler measurement of mitral inflow velocities can be used to assess diastolic function by measuring the early rapid filling wave (E) and the late filling wave due to atrial contraction (A). The velocities and ratios of E/A are used to determine diastolic function, but as they are reflective of the pressure gradient between the left atrium and the left ventricle, they are directly related to preload and inversely related to ventricular relaxation. Doppler tissue myocardial diastolic velocities are less load dependent. In adults, an early diastolic longitudinal (e') velocity of >0.10 m/sec is associated with normal LV diastolic function. DTI measures only vector motion that is parallel to the ultrasound beam and is not able to differentiate between active motion (like myocardial contraction) and passive motion (like tethering). M-mode color DTI is acquired by color-coding images of tissue motion during an M-mode image acquisition. Different colors specify direction of motion and allow images to have both high temporal and spatial resolution."
    },

    // Question 10
    {
        "question": "Which of the following instrumental setting changes will not result in improved temporal resolution for strain imaging?",
        "options": [
            "A. Altering the sector width of interrogation.",
            "B. Selecting a point of interest at a closer image depth.",
            "C. Selecting a point of interest that typically suffers from echo dropout.",
            "D. Altering the harmonics setting."
        ],
        "answer":  "C. Selecting a point of interest that typically suffers from echo dropout.",
        "explanation": "Calculations of strain and strain rate from Doppler tissue data have several areas of possible error. Areas of echo dropout will be encoded slower than actual velocities. Deviation from the intended angle of interrogation alters the type of strain being measured. Areas of interest closer to the pulse source will have higher fidelity measurements, as there is less echo dropout present."
    },

    // Question 11
    {
        "question": "In asymmetric septal hypertrophic cardiomyopathy, tissue Doppler e':",
        "options": [
            "A. Is abnormal in the lateral wall.",
            "B. Is normal in the septum.",
            "C. Has an inverse relationship with septal thickness.",
            "D. Has a direct relationship with septal thickness."
        ],
        "answer": "C. Has an inverse relationship with septal thickness.",
        "explanation": "Tissue Doppler can also identify abnormal regional strain, predominantly in areas of localized hypertrophy. In fact, it appears that the greater the extent of segmental wall thickness, the greater is the reduction in myocardial strain. These abnormalities can often be found in asymptomatic carriers of hypertrophic cardiomyopathy genetic mutations, even in the absence of phenotypic expression. Pulsed Doppler LV filling usually shows impaired relaxation or pseudonormal patterns and rarely the restrictive patterns because of the markedly increased wall thickness and impaired relaxation."
    },
    
    // Question 12
    {
        "question": "In diabetic patients, which of the following statements is correct?",
        "options": [
            "A. HgbA1C correlates with E/e'.",
            "B. Diabetic patients have a higher Doppler E'.",
            "C. Asymptomatic diabetic patients do not demonstrate an abnormal E/e'.",
            "D. The mechanism for any diastolic dysfunction is thought to be related to concomitant renal dysfunction."
        ],
        "answer": "A. HgbA1C correlates with E/e'",
        "explanation": "Glycemic control in diabetic patients has been associated with microvascular complications. Microvascular disease may lead to ischemia and subsequent impaired LV relaxation and increased myocardial stiffness. Advanced glycation end products have been associated with microvascular complications of type 1 diabetes mellitus and may be a pathophysiologic mechanism for diastolic dysfunction in these patients. Type I diabetic patients have worse diastolic function with lower tissue Doppler e'. Furthermore, HgbA1C was correlated with E/e'. These results demonstrate that asymptomatic diastolic dysfunction is common in patients with type I diabetes mellitus and that its severity is correlated with glycemic control. Furthermore, data suggest that asymptomatic diabetic patients have increased LV filling pressure as measured by E/e', and by a larger left atrial size."
    },

    // Question 13
    {
        "question": "In which of the following conditions has e' been shown to improve after treatment?",
        "options": [
            "A. Cardiac amyloidosis.",
            "B. Hypertrophic cardiomyopathy.",
            "C. Dyskinesis in ischemic heart disease.",
            "D. Aortic stenosis."
        ],
        "answer": "D. Aortic stenosis",
        "explanation": "In aortic stenosis, global LV dysfunction is common secondary to the increased afterload. This LV dysfunction may not be discernible based on standard two-dimensional echocardiography alone. Because the sensitivity of tissue Doppler imaging is superior, subclinical LV dysfunction has been detected by tissue Doppler imaging in patients with aortic stenosis despite good ejection fraction. In patients with aortic stenosis, the degree of abnormality in regional deformation correlates with aortic valve area. Once the aortic valve is replaced, e' can normalize."
    },

    // Question 14
    {
        "question": "Which of the following tissue Doppler indices has been shown to carry the most prognostic value after myocardial infarction (MI)?",
        "options": [
            "A. E.",
            "B. e'.",
            "C. E/e'.",
            "D. S."
        ],
        "answer": "C. E/e'",
        "explanation": "After an MI, E/e' has been shown to be associated with an increased risk of death or need for heart transplant. Patients with an E/e' ratio of >17 had a mortality rate of approximately 40% at 36 months compared with 5% in those with an E/e' ratio of <17. In a study that included 250 nonselected patients who had an echocardiogram 1.6 days after an MI followed up for a median of 13 months, the most powerful predictor of survival was an E/e' ratio of >15. E/e' was a stronger predictor than other Doppler echocardiographic indices including the LV filling pulsed Doppler deceleration time. E/e' has also correlated with increased LV end-diastolic volume post-MI and has been attributed to a relationship to LV remodeling and progressive LV dilation."
    },

    // Question 15
    {
        "question": "Which of the following parameters is not directly related to active LV relaxation?",
        "options": [
            "A. Isovolumic relaxation time.",
            "B. e' velocity.",
            "C. A velocity.",
            "D. LV torsion."
        ],
        "answer": "C. A velocity",
        "explanation": "Several studies have shown an inverse relationship between e' and LV relaxation in both patients with normal and elevated preload. Clinical studies suggest that e' is a better discriminator between diastolic dysfunction and normal patients, compared to any other single or combined index of transmittal filling and pulmonary venous Doppler flows. LV torsion and untwisting also correlate well with the relaxation time constant. Isovolumic relaxation time represents the earliest phase of diastole. It is defined as the time from aortic valve closure to mitral valve opening."
    },

    // Question 16
    {
        "question": "Strain measurements obtained from color tissue Doppler:",
        "options": [
            "A. Are not affected by the angle of interrogation.",
            "B. May vary from one heart beat to another.",
            "C. Achieve higher temporal resolution when using a wider color sector angle.",
            "D. Achieve higher temporal resolution when extending the depth of the sampling region.",
            "E. Cannot be obtained in patients with atrial fibrillation."
        ],
        "answer": "B. May vary from one heart beat to another",
        "explanation": "DTI differs from standard Doppler by eliminating the high-pass filter and using low-gain amplification to display the velocities of the myocardium. Tissue Doppler-derived strain is limited to interrogating segments aligned in parallel with the Doppler angle of incidence. Data should be recorded at the highest possible frame rate to maximize temporal resolution. This is accomplished by reducing sector size and depth. Ideally three consecutive heartbeats should be recorded in each view, to account for beat-to-beat variability. Strain measurements may be obtained in patients with atrial fibrillation."
    },

    // Question 17
    {
        "question": "Which of the following cardiac conditions is associated with a normal or high e'?",
        "options": [
            "A. Friedreich's ataxia.",
            "B. Fabry's disease.",
            "C. Hypertrophic cardiomyopathy.",
            "D. Cardiac amyloidosis.",
            "E. Myocardial hypertrophy in athletic hearts."
        ],
        "answer": "E. Myocardial hypertrophy in athletic hearts",
        "explanation": "Tissue Doppler velocities may help to differentiate myocardial hypertrophy seen in athletes from hypertrophic cardiomyopathy, where these velocities are abnormally decreased. Similar findings have been reported in Fabry's disease, a cardiomyopathy secondary to α-galactosidase A deficiency. Mutation-positive Fabry's patients have significant reduction of e' and higher E/e' compared with normal control subjects, even before the development of LV hypertrophy. Tissue Doppler has been used to study myocardial performance in patients with Friedrich's ataxia. Asymptomatic patients who are homozygous for the GAA expansion in the Friedrich's ataxia gene have reduced myocardial velocity gradients during systole and in early diastole. Patients with a restrictive cardiomyopathy from an infiltrative disease process like cardiac amyloidosis will have impaired relaxation and therefore reduced e' velocities."
    },

    // Question 18
    {
        "question": "In a patient with a localized basal lateral infarct with evidence of skinesis by two-dimensional Doppler imaging, the expected longitudinal tissue Doppler velocities (m/sec) and strain rate (1/sec) would be:",
        "options": [
            "A. Tissue Doppler velocity = 0.2, strain rate = 0.",
            "B. Tissue Doppler velocity = 0, strain rate = 0.2.",
            "C. Tissue Doppler velocity = 0.2, strain rate = -0.5.",
            "D. Tissue Doppler velocity = 0, strain rate = 0."
        ],
        "answer": "A. Tissue Doppler velocity = 0.2, strain rate = 0",
        "explanation": "Unlike tissue Doppler, which records myocardial motion and not necessarily contraction, strain rate measures the instantaneous velocities between two points within the myocardium. A strain rate of zero indicates akinesis. A strain rate of >0 indicates expansion, and a strain rate of <0 indicates compression. Velocities may be recorded in akinetic segments that are tethered by adjacent moving segments, in this example, from the apical and mid-lateral wall."
    },

    // Question 19
    {
        "question": "The radial strain map in Figure 8-1 obtained from a patient with chest pain demonstrates:",
        "options": [
            "A. Anteroseptal infarct.",
            "B. Anterolateral infarct.",
            "C. Extensive apical infarct.",
            "D. Normal LV function."
        ], "questionImage": "https://alhadi415.github.io/top/images/8_19q.JPG",
        "answer": "D. Normal LV function",
        "explanation": "As the ventricle contracts, muscle fibers shorten in the longitudinal and circumferential directions and thicken or lengthen in the radial direction. Strain represents the change in segment length throughout a cardiac cycle. Strain rate or strain velocity is the local rate of myocardial deformation and can be derived from DTI velocities. DTI-derived strain rate is a strong index of LV contractility. In Figure 8-1, a parasternal short-axis image of the mid left ventricle is shown. The myocardium has been color coded by segment and by its percent strain value with a scale of 100% (red) and −100% (blue). The time plot at the bottom of the imaging graphs the percent radial strain of each color-coded segment. The color of the plot corresponds to the outlined color of the segment selected. Figure 8-1 shows that the best motion is seen in the mid-antero-lateral wall, which has the darkest red coloring and is also plotted on the graph as the red line with a marked positive percent strain during systole. The mid-antero-septal wall, colored white and outlined in orange, shows akinesis based upon the white color coding and the flat plot of the orange curve. Radial strain can provide quantitative data to assist in the interpretation of segmental wall motion and can be of particular use in the interpretation of stress echocardiograms."
    },

    // Question 20
    {
        "question": "The strain rate pattern in Figure 8-2 is consistent with:",
        "options": [
            "A. Anteroseptal infarct.",
            "B. Anterolateral infarct.",
            "C. Extensive apical infarct.",
            "D. Normal LV function."
        ], "questionImage": "https://alhadi415.github.io/top/images/8_20q.JPG",
        "answer": "A. Anteroseptal infarct",
        "explanation": "Figure 8-2 shows strain rate imaging with regions of interest selected in the septum (yellow circle and corresponding plot) and lateral wall (blue circle and corresponding plot) in the apical four-chamber views. MVC = mitral valve closure, AVO = aortic valve opening, AVC = aortic valve closure, MVO = mitral valve opening. A strain rate of zero indicates akinesis. A strain rate of >0 indicates expansion, and a strain rate of <0 indicates compression. The strain rate of the selected area of the septum (yellow) shows that it maintains a strain rate of approximately zero throughout systole and diastole. This finding is consistent with akinesis and scar formation. The strain rate of the selected area of the lateral wall (blue), however, demonstrates a negative strain rate in systole (from MVC to AVC) signifying appropriate myocardial compression and a positive strain rate in diastole (from AVC to MVC) signifying appropriate myocardial expansion."
    },

    // Question 21
    {
        "question": "A 70-year-old woman with ischemic heart disease and chronic obstructive pulmonary disease (COPD) presents for evaluation of dyspnea. What would you recommend on the basis of the echo Doppler findings in Figure 8-3?",
        "options": [
            "A. Evaluation for pulmonary embolism.",
            "B. Intravenous diuresis and evaluation for ischemia.",
            "C. Initiation of therapy for COPD exacerbation.",
            "D. Right heart catheterization."
        ],"questionImage": "https://alhadi415.github.io/top/images/8_21q.JPG",
        "answer": "B. Intravenous diuresis and evaluation for ischemia",
        "explanation": "The common clinical presentation of dyspnea in an elderly patient with a history of heart disease with concurrent pulmonary pathology is a diagnostic dilemma that can be greatly clarified with echo Doppler tissue use. Specifically, Doppler and DTI can provide information regarding LV preload and relaxation. This information, in conjunction with standard information about biventricular size and function as well as assessment of right ventricular systolic pressure can provide a wealth of actionable information. Figure 8-3A shows an elevated E wave from standard Doppler interrogation of mitral inflow. Figure 8-3B shows decreased Doppler tissue velocities obtained from the lateral mitral annulus. The E/e' ratio in this example is 18. E/e' ratios of >15 have been correlated to pulmonary capillary pressures greater than 18–20 mm Hg. An elevated E/e' ratio has also been related to poor prognosis in both ischemic and nonischemic LV dysfunction."
    },

    // Question 22
    {
        "question": "Two days after successful medical treatment in the previous case, symptoms of dyspnea have resolved. An echocardiogram is repeated, and the Doppler images are shown in Figure 8-4. What can you conclude?",
        "options": [
            "A. Patient requires more aggressive diuresis.",
            "B. Patient has abnormal diastolic function.",
            "C. Patient has a restrictive filling pattern.",
            "D. Patient requires Doppler pulsed wave interrogation of her pulmonary veins to assess diastolic function."
        ],"questionImage": "https://alhadi415.github.io/top/images/8_22q.JPG",
        "answer": "B. Patient has abnormal diastolic function",
        "explanation": "Compared with the prior images, the mitral inflow E wave of the mitral inflow shows a markedly reduced velocity in early diastole after the patient was successfully treated with intravenous diuretics. This finding in combination with symptomatic improvement indicates that her LV end-diastolic pressure or preload has been reduced. This is further confirmed by the E/e' ratio. Despite normal preload conditions after diuresis, both the early to late diastolic filling waves in the standard Doppler as well as the tissue Doppler findings suggest that the patient has underlying diastolic dysfunction. As the deceleration time is >160 milliseconds, this pattern is not consistent with a restrictive filling pattern. Although pulmonary venous filling patterns may give additional information about LV filling patterns, the current information about mitral flow velocity and tissue Doppler allows for the diagnosis of diastolic function."
    },

    // Question 23
    {
        "question": "A 46-year-old woman with previous history of breast cancer treated with mastectomy, chemotherapy, and radiation therapy presents for evaluation of symptoms of fatigue. On examination she has a heart rate (HR) of 100 bpm, BP of 85/60 mm Hg, elevated jugular venous pressure (JVP), decreased breath sounds at the lung bases, ascites, and 3+ edema. Transesophageal and transthoracic echo Doppler images are shown in Figure 8-5. The most likely diagnosis is:",
        "options": [
            "A. Hypertrophic cardiomyopathy.",
            "B. Constrictive pericarditis.",
            "C. Cardiac amyloidosis.",
            "D. Restrictive cardiomyopathy postradiation."
        ],"questionImage": "https://alhadi415.github.io/top/images/8_23q.JPG",
        "answer": "B. Constrictive pericarditis",
        "explanation": "Diastolic dysfunction in constrictive pericarditis results from increased pericardial constraint on the LV that is related to the thickness and rigidity of the pericardium. Patients present with signs and symptoms of right-sided heart failure, which are similar to those found in restrictive cardiomyopathy. Two-dimensional echocardiography may not demonstrate increased pericardial thickness and the typical interventricular septal bounce. Right and left ventricular Doppler filling patterns may demonstrate respiratory variability. However, these findings are not always present and are not specific. Acute respiratory illnesses can increase intrathoracic pressure swings, and the respiratory flow variability also increases. Excessive preload may attenuate the effect of intrathoracic pressure swings and decrease respiratory variability, whereas low preload can decrease the constraining effect of the pericardium also masking the characteristic Doppler signs of constriction. Tissue Doppler myocardial velocities are useful in differentiating restrictive cardiomyopathy from constrictive pericarditis. In restrictive cardiomyopathy patients, both relaxation and stiffness are abnormal. On the other hand, relaxation is preserved in pure constrictive pericarditis, in the absence of other myocardial disease. Patients with constrictive pericarditis and normal systolic function have normal or elevated e' velocities (>8 cm/sec), reflecting their preserved ventricular relaxation. In this example, the mitral inflow demonstrates some respiratory variation and its morphology is suggestive of a restrictive filling pattern; however, Doppler tissue at the mitral annulus demonstrates preservation of relaxation making a cardiomyopathy such as cardiac amyloidosis and hypertrophic cardiomyopathy unlikely. The E/e' ratio is approximately 4, which does not correspond to an elevated left ventricular end-diastolic pressure."
    },

    // Question 24
    {
        "question": "A 68-year-old woman presents for evaluation of dyspnea on exertion. Tissue Doppler images are shown in Figure 8-6. The most likely diagnosis is:",
        "options": [
            "A. Asymmetric septal hypertrophic cardiomyopathy.",
            "B. Anterolateral infarction.",
            "C. Cardiac amyloidosis.",
            "D. Constrictive pericarditis."
        ],"questionImage": "https://alhadi415.github.io/top/images/8_24q.JPG",
        "answer": "A. Asymmetric septal hypertrophic cardiomyopathy",
        "explanation": "Figure 8-6 shows tissue Doppler in the lateral wall and in the septal wall. The significant difference between the A and B can be seen in the early diastolic velocity. The most common form of hypertrophic cardiomyopathy is characterized by a prominent increase in global or segmental LV wall thickness and histologically by myocardial fiber disarray. Diastolic function is characterized by increased LV chamber stiffness and decreased relaxation of variable severity due to the asynchronous deactivation of the muscle fibers. This asynchronous deactivation is manifested in Doppler tissue as a decreased velocity seen in hypertrophic segments (septum in this example) in early diastole when compared with segments that do not demonstrate hypertrophy (lateral wall in this example)."
    },

    // Question 25
    {
        "question": "The image in Figure 8-7 was obtained from a 70-year-old patient presenting with chest pain. The longitudinal strain pattern suggests:",
        "options": [
            "A. Anterior dyskinesis.",
            "B. Apical dyskinesis.",
            "C. Inferior dyskinesis.",
            "D. Posterior dyskinesis."
        ],"questionImage": "https://alhadi415.github.io/top/images/8_25q.JPG",
        "answer": "D. Posterior dyskinesis",
        "explanation": "This apical three-chamber view of the left ventricle is analyzed using a two-dimensional speckle-tracking algorithm. As reviewed in question number 8, speckle-tracking technology has the advantage of measuring tissue velocities and deformation in an angle-independent fashion, which enables it to track the movement of the speckle in both dimensions of the two-dimensional image. Figure 8-7 clearly shows that the posterior wall of the left ventricle has been colored in blue, denoting a positive longitudinal strain rate in systole, which indicates an inappropriate expansion during this phase of the cardiac cycle. The rest of the ventricle is colored in shades of red, denoting a negative strain rate in systole, which indicates an appropriate longitudinal compression."
    },

    // Question 26
    {
        "question": "A 64-year-old diabetic woman is referred for evaluation of heart failure symptoms. The two-dimensional (Fig. 8-8A), color tissue Doppler (Fig. 8-8B) images and strain (Fig. 8-8C) data obtained from the apical four-chamber view are consistent with:",
        "options": [
            "A. Dilated cardiomyopathy.",
            "B. Ischemic heart disease.",
            "C. Restrictive cardiomyopathy.",
            "D. Hypertrophic cardiomyopathy."
        ],"questionImage": "https://alhadi415.github.io/top/images/8_26.JPG",
        "answer": "B. Ischemic heart disease",
        "explanation": "The two-dimensional image in Figure 8-8 demonstrates a dilated LV cavity, consistent with either dilated or ischemic cardiomyopathy. The tissue Doppler image shows a different color velocity pattern in the septum and the lateral wall, and strain imaging shows reduced deformation in the apical septum (yellow curve) compared with the apical lateral wall (red curve); these findings have been consistent with a septal MI."
    },

    // Question 27
    {
        "question": "A 35-year-old man is evaluated for palpitations. His BP is 120/70 mm Hg and his HR is 60 bpm. The findings from his physical examination are normal. An electrocardiogram shows increased voltage and diffused T-wave inversions. A transthoracic echocardiogram is performed. Two-dimensional (Fig. 8-9), color Doppler (Fig. 8-9B) images and strain rate (Fig. 8-9C) measurements are obtained from the apical two-chamber view. The most likely diagnosis is:",
        "options": [
            "A. Asymmetric septal hypertrophic cardiomyopathy.",
            "B. Apical hypertrophic cardiomyopathy.",
            "C. LV dyssynchrony.",
            "D. Normal structural heart."
        ],"questionImage": "https://alhadi415.github.io/top/images/8_27q.JPG",
        "answer": "B. Apical hypertrophic cardiomyopathy",
        "explanation": "The strain rate images in Figure 8-9 demonstrate anteroapical dyskinesis (red curve), a pattern compatible with apical MI, a localized infiltrative disorder, or apical hypertrophic cardiomyopathy."
    },

    // Question 28
    {
        "question": "A 72-year-old man is admitted to the hospital with decompensated heart failure. His BP is 100/70 mm Hg, and HR is 86 bpm. On examination, he has jugular venous distension, diffuse inspiratory rales and 3+ pitting edema. He is taking carvedilol 25 mg twice daily, lisinopril 20 mg daily, furosemide 80 mg daily, and spironolactone 12.5 mg daily. Based on the two-dimensional (Fig. 8-10A) and color M-mode tissue Doppler (Fig. 8-10B) parasternal images, the most likely cause of heart failure is:",
        "options": [
            "A. Atrial flutter.",
            "B. Inferolateral MI.",
            "C. Restrictive cardiomyopathy.",
            "D. LV dyssynchrony."
        ],"questionImage": "https://alhadi415.github.io/top/images/8_28q.JPG",
        "answer": "C. Restrictive cardiomyopathy",
        "explanation": "The two-dimensional short-axis images in Figure 8-10 demonstrate increased LV wall thickness with normal LV cavity size. The color M-mode tissue Doppler indicates a sinus rhythm pattern with both reduced septal and inferolateral velocities, findings consistent with a restrictive cardiomyopathy. LV dyssynchrony is a recognized cause of heart failure only in the setting of LV dilatation and reduced LV ejection fraction."
    },

    // Question 29
    {
        "question": "A 62-year-old man with H/O rheumatic heart disease and previous mitral valve repair undergoes echocardiographic examination for evaluation of a heart murmur. The two-dimensional (Fig. 8-11A) and color M-mode tissue Doppler (Fig. 8-11B) parasternal images are consistent with:",
        "options": [
            "A. Anteroseptal MI.",
            "B. Inferolateral MI.",
            "C. LV dyssynchrony.",
            "D. Normal postoperative findings."
        ],"questionImage": "https://alhadi415.github.io/top/images/8_29.JPG",
        "answer": "D. Normal postoperative findings",
        "explanation": "The color M-mode tissue Doppler in Figure 8-11 indicates paradoxical anterior systolic motion of the interventricular septum, a common finding after pericardiotomy."
    },

    // Question 30
    {
        "question": "A 78-year-old woman with H/O diabetes, chronic renal insufficiency, sick sinus rhythm, congestive heart failure, and COPD presents to the emergency department with worsening symptoms of dyspnea. On her physical examination, BP is 160/90 mm Hg, HR is 60 bpm, and respiratory rate (RR) is 28. On auscultation, a II/VI ejection systolic murmur (ESM) is detected at the left upper sternal border (LUSB). Breath sounds are muffled, with both bibasilar rales and expiratory wheezing. Oxygen saturation is 90%. Initial blood work demonstrates hemoglobin count = 10 mg/dl, BUN = 50 mg/dl, and serum creatinine level = 2.0 mg/dl. An echocardiogram is performed immediately at the bedside while the patient has labored breathing. Apical four-chamber images obtained at end-diastole (Fig. 8-12A) and end-systole (Fig. 8-12B) as well as pulsed Doppler LV filling (Fig. 8-12C) and basal septal tissue Doppler (Fig. 8-12D) images are shown. In addition to oxygen, you should initially recommend:",
        "options": [
            "A. Intravenous furosemide.",
            "B. Intravenous beta-blockers.",
            "C. Inhaled bronchodilators.",
            "D. Blood transfusion."
        ], "questionImage": "https://alhadi415.github.io/top/images/8_30q.JPG",
        "answer": "C. Inhaled bronchodilators",
        "explanation": "In this patient, the E/e' ratio is 8, the E/A ratio is 0.9, and the E deceleration time is normal. All findings are consistent with normal LV filling pressures. Therefore, the most likely cause of the patient’s symptoms is decompensated COPD."
    }

];