const questions = [
    // Question 1
    {
      question: "Which leaflets of the tricuspid valve are visualized on the apical four-chamber view?",
      options: [
        "A. Septal and anterior.",
        "B. Septal and posterior.",
        "C. Anterior and posterior.",
        "D. None of the above."
      ],
      answer: "A. Septal and anterior.",
      "explanation":" . On transthoracic imaging, the posterior leaflet of the tricuspid valve is only visualized on the RV inflow view. The septal and anterior leaflets are visualized on the apical four-chamber view. "

    },
    // Question 2
    {
      question: "Calculation of left ventricular (LV) mass on the basis of M-mode echocardiography assumes that the geometry of the LV is:",
      options: [
        "A. Spherical.",
        "B. Ellipsoid.",
        "C. Cylindrical.",
        "D. None of the above."
      ],
      answer: "B. Ellipsoid.",
      "explanation":" . LV mass and LV volume measurements from M-mode and 2D echo are based on the geometric assumptions that the ventricle is an ellipsoid with a 2:1 long-axis to short-axis ratio. The mass formula, LV mass (g)  0.8 (1.04 [(LVIDd  PWTd  SWTd)3  LVIDd3]) 0.6 (where LVIDd, PWTd, and SWTd are diastolic LV internal dimension, posterior wall thickness, and septal thickness, respectively) calculates the volumes of an inner and outer ellipsoid and subtracts the inner volume from the outer volume. The resulting volume is that of a “shell” of myocardium. The volume of this shell of myocardium is then multiplied by the specific gravity of myocardium, 1.04 g/m2 , to yield LV mass. This geometric assumption limits the applicability of the formula to normally shaped hearts. "

    },
    // Question 3
    {
      question: "Which parameter of systolic function is independent of ventricular preload?",
      options: [
        "A. Ejection fraction (EF).",
        "B. Peak rate of change in pressure (dP/dT).",
        "C. End systolic volume.",
        "D. Fractional shortening."
      ],
      answer: "C. End systolic volume." ,
      "explanation":" Virtually all parameters of systolic function (EF, dP/dT, fractional shortening, and Vcf shortening)depend on loading conditions. Preload is the force that acts to stretch the myocardial fibers at end diastole, and is related to end-diastolic volume. By Starling’s law of the heart, increased preload will be associated with increased fiber stretch and increased force of contraction. Afterload is the force that opposes LV ejection. End-systolic volume is also a parameter of systolic function. A related concept is that at any given contractile state, the LV will contract to the same end-systolic volume even as the LV diastolic volume increases. "

    },
    // Question 4
    {
      question: "In which of the following conditions would auscultation reveal a soft first heart sound?",
      options: [
        "A. Mitral stenosis.",
        "B. Calcific aortic stenosis.",
        "C. Right bundle branch block.",
        "D. First degree atrioventricular (AV) block."
      ],
      answer: "D. First degree atrioventricular (AV) block.",
      "explanation":" The degree to which the mitral valve leaflets are separated when ventricular activation closes the mitral valve is an important determinant of the loudness of the mitral component of the S1. Accordingly, in a patient with a long PR interval (choice D), the mitral and tricuspid leaflets float into a semi-closed position because of the long period between atrial contraction and ventricular activation. Mitral stenosis is characterized by a loud first sound, if the leaflets are pliable, because the transmitral gradient at end diastole prevents the leaflets from drifting close together. Calcific aortic stenosis (by itself) or right bundle branch block do not have much of an impact on the loudness of the S1. "

    },
    // Question 5
    {
      question: "According to the American Society of Echocardiography’s most recent guidelines, chamber dimensions on 2D (two-dimensional) echocardiography should be measured:",
      options: [
        "A. Leading edge to leading edge.",
        "B. Trailing edge to leading edge.",
        "C. Trailing edge to trailing edge.",
        "D. None of the above."
      ],
      answer: "D. None of the above.",
      "explanation":" According to the most recent echocardiographic quantification guidelines, “Use of 2D echocardiographically derived linear dimensions overcomes the common problem of oblique parasternal images resulting in overestimation of cavity and wall dimensions from M-mode. Consequently, it is now possible to measure the actual visualized thickness of the ventricular septum and other chamber dimensions as defined by the actual tissue–blood interface, rather than the distance   between the leading edge echoes, which had previously been recommended.”                    ",

    },
    // Question 6
    {
      question: "Which statement concerning quantitation of LV volumes is true?",
      options: [
        "A. Echo LV volumes are usually similar to contrast angiographic volumes.",
        "B. Echo LV volumes are usually smaller than contrast angiographic volumes.",
        "C. Echo LV volumes are usually greater than contrast angiographic volumes.",
        "D. Echo LV volumes are usually much greater than contrast angiographic volumes."
      ],
      answer: "B. Echo LV volumes are usually smaller than contrast angiographic volumes.",
      "explanation":" Numerous comparison studies have shown that LV volumes derived from echocardiography are systematically smaller than those derived from contrast angiography. The two reasons for this discrepancy are that echocardiographic algorithms that utilize apical views (e.g. biplane method of disks) underestimate the true length of the LV, when compared with angiography; and second, angiographic contrast fills the recesses between trabeculations, yielding a larger area ",

    },
    // Question 7
    {
      question: "In which condition would you expect to see normal motion of the interventricular septum on M-mode?",
      options: [
        "A. Right ventricular pacing.",
        "B. Severe tricuspid regurgitation.",
        "C. Atrial septal defect.",
        "D. Aortic valve replacement.",
        "E. Aortic insufficiency."
      ],
      answer: "E. Aortic insufficiency.",
      "explanation":"  The interventricular septum normally moves posterior (leftward) in early ventricular systole.Paradoxical septal motion is an early systolic anterior (rightward) motion of the septum. Thickening of the septum still occurs. Paradoxical septal motion is associated with conditions in which there is RV volume overload, or left bundle branch block, either developed or due to RV pacing. After aortic valve replacement, or indeed any cardiac surgery, there is prominent translation of the heart that can give the appearance of paradoxical septal motion. Aortic insufficiency, a situation in which there is LV volume overload, would not be expected to be associated with paradoxical septal motion and is, therefore, thecorrect answer.                 ",

    },
    // Question 8
    {
      question: "The biplane method of disks shows an EF of 60% in a 40-year-old woman with palpitations. Systolic strains are also measured using speckle-tracking software. What would be expected values for systolic strains in the longitudinal and radial directions?",
      options: [
        "A. 10% and 20%.",
        "B. 20% and 40%.",
        "C. 40% and 60%.",
        "D. None of the above."
      ],
      answer: "B. 20% and 40%.",
      "explanation":" . Left ventricular systolic function involves the coordinated contraction of longitudinal and circumferential fibers. In the normal LV, subendocardial and subepicardial fibers are oriented longitudinally. In the midwall, fibers are oriented circumferentially. Descriptors of systolic function include the percentage shortening of the LV along the long-axis (apex-to-base) orientation. This percentage shortening of the long axis in normal patients ranges from 15%–25%. This percent longitudinal shortening is also known as longitudinal strain. This means that if the LV is 10 cm in length at end diastole, its end-systolic length would be about 8 cm. The “compression” or “shortening” of the length is 2 cm and as a percentage of initial length, it would be 20%. This in essence is longitudinal systolic strain. Circumferential fiber shortening leads to wall thickening and reduction of the radius of the LV. This wall thickening, in the normal ventricle, averages approximately 30% to 40%, and is known as radial strain, the percent change in the thickness of the ventricular wall going from end diastole to end systole. As an example, a normal LV wall might have a wall thickness of 1.0 cm in diastole and, if the wall thickens 40%, a wall thickness of 1.4 cm at end systole. ",

    },
    // Question 9
    {
      question: "The American Society of Echocardiography’s recommended method to calculate LV EF on the basis of 2D echocardiography is:",
      options: [
        "A. Area length.",
        "B. The truncated ellipse.",
        "C. Automated boundary detection.",
        "D. Teichholz method.",
        "E. Biplane method of disks."
      ],
      answer: "E. Biplane method of disks.",
      "explanation":" Numerous 2D echocardiographic methods have been utilized to assess EF. Limitations for each method should be expected because all of these methods are based on geometric assumptions. Using apical longitudinal views, the modified Simpson’s method, also known as the biplane method of disks, has been  endorsed by the American Society of Echocardiography to calculate EF on the basis of 2D echocardiography in most instances   ",

    },
    // Question 10
    {
      question: "The principal determinant of the first component of the pulmonary vein systolic velocity (S1) is:",
      options: [
        "A. RV systolic pressure.",
        "B. Left atrial pressure.",
        "C. LV systolic function.",
        "D. Atrial relaxation."
      ],
      answer: "D. Atrial relaxation.",
      "explanation":" Many variables affect pulmonaryvein flow. These include age, preload, LV systolic function, AV conduction, and heart rate. In patients with normal systolic function, S2 velocity is related to LA pressure.By contrast, S1 is more closely related to atrial relaxation ",

    },
    // Question 11
    {
      question: "Of the following conditions, which is most likely to be characterized by an improvement in LV EF following valve replacement:",
      options: [
        "A. Acute severe mitral regurgitation due to flail leaflet.",
        "B. Chronic severe aortic stenosis.",
        "C. Severe mitral stenosis.",
        "D. Acute aortic regurgitation due to bacterial endocarditis."
      ],
      answer: "B. Chronic severe aortic stenosis.",
      "explanation":" This question requires some understanding of LV function in valvular heart disease. LV EF is inversely related to afterload and directly related to preload and inotropic state. Afterload, or wall stress, is directly related to systolic pressure and heart size, and inversely related to wall thickness. In acute severe regurgitation of either mitral or aortic valve, catecholamine tone is high, which supports the pump function despite severe regurgitation. Thus, of the following choices, chronic severe aortic stenosis (AS) is the most likely condition to have high afterload; in mitral stenosis, afterload is low, as is the case in acute mitral regurgitation (MR), where the LV ejects into the “low impedance” left atrium. In both acute severe MR and AR, catecholamine tone is likely to be high and EF is often normal if not above normal. Thus, LV EF in the latter two conditions would not be expected to rise significantly. Furthermore, LV EF would not be expected to decrease significantly after mitral valve replacement MVR) for mitral stenosis (MS), as the afterload in that condition is usually normal. By contrast, in severe AS, systolic loads are often quite high, due to very high intracavitary pressures and, in later stages, cavity dilation. Hypertrophy may be inadequate to normalize afterload. However, following aortic valve replacement (AVR), systolic pressure comes down, heart size usually decreases (if there is dilation), and these factors lead tolower afterload and improved EF. ",

    },
    // Question 12
    {
      question: "In which condition is LV mass index expected to be lowest?",
      options: [
        "A. Mitral stenosis.",
        "B. Ventriculoseptal defect with a significant left-to-right shunt.",
        "C. Chronic severe aortic regurgitation.",
        "D. Chronic severe mitral regurgitation due to mitral valve prolapse."
      ],
      answer: "A. Mitral stenosis.",
      "explanation":" Choices B–D will feature LV dilation, but choice A does not. Since the LV mass formula (see question 2) depends on chamber size, a large LV will usually be associated with a large LV mass index. ",

    },
    // Question 13
    {
      question: "Which of the following is most helpful in preventing foreshortening of the apex in standard 2D imaging?",
      options: [
        "A. Placing the transducer at the site of the most forceful apical impulse.",
        "B. Use of perflutren contrast.",
        "C. Use of a cut-out mattress.",
        "D. Shifting to a shallow left lateral decubitus position."
      ],
      answer: "C. Use of a cut-out mattress.",
      "explanation":" In general, foreshortening of the apex will be minimized by use of a steep left lateral decubitus position, a cut out mattress, and avoiding the most forceful apical impulse. ",

    },
    // Question 14
    {
      question: "When comparing 2D with M-mode echocardiography, which of the following statements is true?",
      options: [
        "A. The axial resolution of M-mode echocardiography is superior to that of 2D echocardiography.",
        "B. The temporal resolution of M-mode echocardiography is superior to that of 2D echocardiography.",
        "C. The axial resolution of M-mode echocardiography is inferior to that of 2D echocardiography.",
        "D. The lateral resolution of M-mode echocardiography is superior to that of 2D echocardiography."
      ],
      answer: "B. The temporal resolution of M-mode echocardiography is superior to that of 2D echocardiography.",
      "explanation":" The high temporal resolution of Mmode echocardiography is due to the fact that this technique has a much higher sampling rate compared with 2D echocardiography. For both techniques, the axial resolution is similar because the same transducer frequency is used. Lateral resolution is superior with 2D echocardiography because sampling occurs only along a single scan line with the M-mode technique. ",

    },
    // Question 15
    {
      question: "Of the following M-mode signs, which is most specific to suggest the presence of cardiac tamponade?",
      options: [
        "A. Right atrial inversion for less than one-third of the cardiac cycle.",
        "B. Plethora of the inferior vena cava (IVC).",
        "C. Rapid mitral EF slope.",
        "D. Right ventricular diastolic collapse."
      ],
      answer: "D. Right ventricular diastolic collapse.",
      "explanation":" Right atrial inversion and plethora of the IVC are sensitive signs suggesting increased intraperi cardial pressures but they are not the most specific signs suggesting cardiac tamponade. When right atrial inversion extends for more than one-third of the cardiac cycle, the reported specificity is high. Plethora of the IVC is a nonspecific marker associated with increased right atrial pressures; plethora can be observed even when the right atrial pressure is not increased as is seen with certain highly trained athletes. With inspiration, the mitral EF slope has been observed to diminish and, thus, is not rapid in the presence of cardiac tamponade. Of the choices available, right ventricular diastolic collapse is the most specific sign of cardiac tamponade.     ",

    },
    // Question 16
    {
      question: "This M-mode echocardiogram was taken from the study of a 48-year-old man with dyspnea. His blood pressure is 120/90 mm Hg. What may be said about this patient's hemodynamic state?",
      options: [
        "A. There is severe aortic regurgitation.",
        "B. The LV end-diastolic pressure is high.",
        "C. The stroke volume is normal.",
        "D. The stroke volume is low.",
        "E. The cardiac output is normal."
      ],
      "questionImage": "https://alhadi415.github.io/top/images/3_16q.JPG",
      "explanationImage": "https://alhadi415.github.io/top/images/3_16e.JPG",
      answer: "D. The stroke volume is low.",
      "explanation":" This study was obtained in a patient with an idiopathic dilated cardiomyopathy. The M-mode echocardiogram shows marked dilation, with an end-diastolic dimension approaching 6 cm, and an end-systolic dimension of 5.5 cm. The fractional shortening is therefore quite low. There is a large separation between the anterior leaflet of the mitral valve and the septum (the “e-point septal separation,” because the peak anterior position of the anterior leaflet is known as the e point in M-mode parlance). This sign is associated with a low forward stroke volume. It is important to realize that LV dilation by itself does not lead to an abnormal e-point septal separation. An individual with severe aortic regurgitation might have a dilated LV but normal fractional shortening. In that case, the e-point septal separation would be normal. As for the incorrect choices, while this patient might have high left ventricular end diastolic pressure (LVEDP), there is no definite evidence thereof. The pathognomonic M-mode sign of this physiology, the so-called a-c shoulder or b-bump is not present. (Figure 3-13 shows a prominent b-bump.) As far as cardiac output is concerned, recall that it can be normal despite a low stroke volume, if there is compensatory tachycardia. Finally, the etiology of the LV dysfunction shown in this case could have been chronic aortic regurgitation, with the development of contractile failure, but this M-mode tracing is not specific for such a cardiomyopathy. The lack of fluttering of the mitral leaflets provides some evidence against significant aortic regurgitation ",

    } ,
    // Question 17
{
    question: "A 54-year-old man undergoes echocardiography. He has severe hypertension, refractory to three drugs. He has no history of coronary or valvular heart disease. His septal and posterior wall thickness is 12 mm and his end-diastolic dimension is 44 mm. His LV mass index is 92 g/m². Which statement regarding this patient is most accurate?",
    options: [
        "A. He has concentric remodeling.",
        "B. He likely has normal diastolic function.",
        "C. Left ventricular function is likely abnormal.",
        "D. He has LV hypertrophy."
    ],
    "questionImage": "https://alhadi415.github.io/top/images/3_17q.JPG",
    
    answer:  "A. He has concentric remodeling." ,
    "explanation":" . This patient’s LV mass index is normal, by the partition values in the ASE quantitation guidelines, so he does not have LV hypertrophy, by definition. According to the pioneering work of Ganau et al., and as recommended by the ASE quantitation guidelines, the combination of a high relative wall thickness with a normal LV mass index is termed concentric remodeling. This individual clearly has an elevated relative wall thickness, defined as (2  PWTd)/LVIDd with the upper limit of normal 0.42. The term concentric hypertrophy refers to an elevated LV mass index (i.e., 95 g/M2 in women, greater than 115 g/M2 in men) and a high relative wall thickness. According to work by Wachtell and coworkers, most individuals with hypertension and evidence of remodeling, as the case with this individual, have abnormalities in diastolic filling. The M-mode clearly shows normal fractional shortening; although this is not necessarily the same as a normal EF. The absence of coronary heart disease by history argues that global EF is normal. ",

},

// Question 18
{
    question: "The tracings in Figure 3-3A and B are tissue Doppler tracings taken from the study of an asymptomatic 62-year-old woman undergoing echocardiography for the evaluation of a systolic murmur. Which of the following is correct?",
    options: [
        "A. Figure 3A is taken from the septal annulus.",
        "B. The patient likely has an infiltrative cardiomyopathy.",
        "C. The patient likely has constrictive pericarditis."
    ],
    "questionImage": "https://alhadi415.github.io/top/images/3_18q.JPG",
    answer: "A. Figure 3A is taken from the septal annulus.",
    "explanation":"  Tissue Doppler tracings give insight into systolic and diastolic function and can be used to estimate LV filling pressures in many instances. Some basic facts about tissue Doppler imaging tracings are that the septal annulus diastolic velocity is less than the lateral annulus velocity in the absence of coronary heart disease/myocardial infarction. A notable exception to this generalization is constrictive pericarditis (annulus paradoxus). There are data concerning normal values for tissue Doppler diastolic velocities, which vary inversely with age; according to data from Tighe et al., the mean tissue Doppler E, obtained from the lateral annulus, in normal individuals aged 60–70 years is 12  3 cm/sec. At the age of 62 years, the velocity shown (13.7 cm/sec) is within the expected range.  ",

},

// Question 19
{
    question: "A 43-year-old man is seen in your office for exercise-induced dyspnea. He has no history of heart failure symptoms or prior coronary heart disease. On a standard Bruce protocol exercise treadmill test (ETT), he is only able to complete 5 minutes before stopping due to dyspnea. His resting blood pressure is 150/90 mm Hg. His study showed normal LV size, mildly increased wall thickness, and an EF of 50%. An image from this study is shown in Figure 3-4. What is the least likely conclusion?",
    options: [
        "A. He has normal heart.",
        "B. He has hypertrophic cardiomyopathy.",
        "C. He has an infiltrative cardiomyopathy.",
        "D. He has hypertensive heart disease."
    ],"questionImage": "https://alhadi415.github.io/top/images/3_19q.JPG",

    answer: "A. He has normal heart.",
    "explanation":" These data show significant systolic and diastolic dysfunction in this patient with symptoms of exertional dyspnea. The strain image demonstrates longitudinal strain. Longitudinal strain can be thought of as the degree of compression of 6 segments of myocardium along the long axis. Normal data from our laboratory indicate that longitudinal strain averages 22%  3%. There is regional variation in strain values, with higher values seen in the apical segments. In this example, however, the highest strain values are approximately 14%, which are low and indicative of systolic dysfunction. The values demonstrate the usual apex-to-base gradient, though the values are consistently lower than normal. In addition, what secures the diagnosis of abnormal LV function is the tissue Doppler diastolic findings. The average diastolic velocities for a 43-year-old normalindividual should be in the range of 16  4 cm/sec, more than twice as high as what is shown. Thus, the systolic and diastolic data shown indicate abnormalities of systolic and diastolic function. Given that there are no focal wall motion abnormalities, one must suspect a global process, such as infiltrative cardiomyopathy (e.g., amyloidosis), hypertrophic cardiomyopathy, or severe hypertensive heart disease, where some of the dysfunction may be related to high afterload.   ",

},

// Question 20
{
    question: "This M-mode is taken from the study of a 59-year-old man who presents with severe heart failure symptoms (Fig. 3-5). You would expect his exam to show:",
    options: [
        "A. An opening snap.",
        "B. Rales.",
        "C. An apical systolic murmur.",
        "D. A holodiastolic murmur."
    ],"questionImage": "https://alhadi415.github.io/top/images/3_20q.JPG",
    answer: "D. A holodiastolic murmur.",
    "explanation":" The M-mode shows a classic example of early mitral valve closure which is pathognomonic of acute severe AR. There is also LV dilation and a generous e-point septal separation. The early closure of the mitral valve is caused by the rapid equilibration of LV diastolic pressure and aortic diastolic pressure. Patients with acute severe aortic regurgitation are likely to have evidence of elevated filling pressure and rales. An opening snap is heard in patients with rheumatic mitral stenosis with pliable leaflets. This is not the echocardiogram of such a patient. An apical systolic murmur implies mitral regurgitation and there is no suggestion that this patient has coexisting MR ",

},

// Question 21
{
    question: "A 56-year-old man presents to the hospital with progressive shortness of breath. Based on the results of the recorded M-mode echocardiogram (Fig. 3-6), the following conclusions can be drawn:",
    options: [
        "A. The LV cavity size is normal, stroke volume is increased, and LV end-diastolic pressure is normal.",
        "B. The LV cavity is dilated, stroke volume is reduced, and the LV end-diastolic pressure is increased.",
        "C. The LV cavity is dilated, stroke volume is reduced, and LV end-diastolic pressure is normal.",
        "D. The LV cavity size is normal, stroke volume is increased, and mean left atrial pressure is increased."
    ],"explanationImage": "https://alhadi415.github.io/top/images/3_21e.JPG",
    "questionImage": "https://alhadi415.github.io/top/images/3_21q.JPG",
    answer: "B. The LV cavity is dilated, stroke volume is reduced, and the LV end-diastolic pressure is increased.",
    "explanation":" This 56-year-old man presented with symptoms and signs of heart failure. This M-mode echocardiogram is recorded through the mitral leaflet ىtips (Fig. 3-14). This recording shows significantly increased LV cavitary dimensions in systole and diastole (stippled arrows), a significantly increased e-point septal separation distance (stippled lines), and interrupted AC closure of the mitral valve echo. The findings of this M-mode echocardiogram suggest that very poor systolic performance is present. The LV cavity is dilated and the LV EF is severely reduced. Stroke volume is severely reduced as indicated by the increased e-point septal separation distance (normal 7 mm). The LV enddiastolic pressure is elevated as indicated by the presence of the interrupted AC closure or “b-bump.” The mean left atrial pressure, although likely elevated, cannot be derived from the information presented. ",

},

// Question 22
{
    question: "The structures depicted on the RV inflow view in Figure 3-7 include:",
    options: [
        "A. The orifice of the IVC, The eustachian valve, The superior vena cava.",
        "B. The coronary sinus, The crista terminalis, The orifice of the superior vena cava.",
        "C. The coronary sinus, The eustachian valve, The orifice of the IVC.",
        "D. The coronary sinus, A prominent Chiari network, The orifice of the IVC."
    ],"explanationImage": "https://alhadi415.github.io/top/images/3_22e.JPG",
    "questionImage": "https://alhadi415.github.io/top/images/3_22q.JPG",
    answer: "C. The coronary sinus, The eustachian valve, The orifice of the IVC.",
    "explanation":" . The right ventricular inflow view in Figure 3-15 illustrates the origin of the coronary sinus in the posterior septal space adjacent to the tricuspid valve leaflet. The eustachian valve, also known as the right sinus valve or the valve of the IVC, is somewhat prominent in this example. Adjacent to the eustachian valve is the orifice of the IVC. Also well illustrated in this view are the posterior and anterior leaflets of the tricuspid valve (small stippled arrows). A Chiari complex is derived embryologically from the same structures as the eustachian valve; however, it would appear as a highly mobile thin filamentous structure. The orifice of the superior vena cava cannot normally be seen in this tomographic imaging plane ",

},

// Question 23
{
    question: "The condition most commonly associated with the M-mode finding in Figure 3-8 is:",
    options: [
        "A. Chronic severe pulmonary arterial hypertension.",
        "B. Severe pulmonary valve stenosis.",
        "C. Primary tricuspid valve regurgitation.",
        "D. Acute pulmonary emboli."
    ],"explanationImage": "https://alhadi415.github.io/top/images/3_23e.JPG",
    "questionImage": "https://alhadi415.github.io/top/images/3_23q.JPG",
    answer: "A. Chronic severe pulmonary arterial hypertension.",
    "explanation":" This M-mode recording of the pulmonary valve illustrates the “flying-W sign” (Fig. 3-16). The normal pulmonary valve M-mode is characterized by presystolic a-wave with motion away from the transducer followed by further posterior motion of the valve leaflet during systole. With chronic severe pulmonary hypertension, a characteristic appearance to the M-mode tracing, termed “the flying-W sign,” may be generated. This tracing is characterized by the loss of the a-wave (solid arrow) and mid-systolic notching (stippled arrow). With pulmonary valve stenosis, the awave is characteristically preserved, or even accentuated, and mid-systolic notching is not observed. In a pure right heart volume load state, such as occurs with primary tricuspid regurgitation, one would not expect pulmonary hypertension to be present and thus the pulmonary valve M-mode tracing should not be altered significantly. Among patients with acute pulmonary embolism, the level of elevation of the pulmonary artery pressure does not usually exceed 50 mm Hg and thus the M-mode findings of chronic severe pulmonary arterial hypertension would not be expected to be observed. ",

},

// Question 24
{
    question: "A 55-year-old woman is admitted to the hospital with syncope. Based on the M-mode shown in Figure 3-9, what is your diagnosis?",
    options: [
        "A. A vegetation involving the mitral valve is present.",
        "B. A left pleural effusion and pericardial effusion are present.",
        "C. A large pericardial effusion with evidence of tamponade is present.",
        "D. A large left pleural effusion is present."
    ],"questionImage": "https://alhadi415.github.io/top/images/3_24q.JPG",
    "explanationImage": "https://alhadi415.github.io/top/images/3-24e.JPG",
    answer: "C. A large pericardial effusion with evidence of tamponade is present.",
    "explanation":" This M-mode shows evidence of systolic anterior motion of the mitral valve, a sign that is pathognomonic for hypertrophic obstructive cardiomyopathy (Fig. 3-17). Recent work has shown that 70% of patients with hypertrophic cardiomyopathy have obstruction either at rest or provoked by exercise. In hypertrophic obstructive cardiomyopathy, there is hyperdynamic systolic function, with low levels of wall stress; the LV outflow tract is narrowed by septal hypertrophy and, in some patients, by anterior displacement of the mitral valve. The posterior systolic motion of the interventricular septum further narrows the LV outflow tract; this results in high LV outflow tract blood velocities, which pull the mitral valve leaflet toward the interventricular septum (Venturi effect). The arrow points to systolic anterior motion of the mitral valve with septal–mitral contact (see Video 3-9) ",

},

// Question 25
{
    question: "The M-mode in Figure 3-10 is associated with what abnormality?",
    options: [
        "A. Acute severe aortic regurgitation.",
        "B. Rheumatic mitral stenosis.",
        "C. Left atrial myxoma.",
        "D. Hypertrophic cardiomyopathy."
    ],"explanationImage": "https://alhadi415.github.io/top/images/3_25e.JPG",
     "questionImage": "https://alhadi415.github.io/top/images/3_25q.JPG",


    answer: "C. Left atrial myxoma.",
    "explanation":" This M-mode recording illustrates a classic case of a left atrial myxoma prolapsing into the mitral orifice with valve opening (Fig. 3-10, shown in real time on the accompanying Video 3-10). The tumor (Myx) appears as a mass of echoes behind the mitral valve during diastole. Note the echo free space behind the anterior leaflet at the onset of diastole (thin arrows). This occurs because a time lag exists between the early diastolic opening of the valve and when the tumor mass subsequently moves into the mitral orifice. Although the mitral EF slope is diminished significantly (thick white arrow), this recording is not consistent with rheumatic mitral stenosis. The mitral leaflets are not thickened and the posterior leaflet moves normally (black arrow). Findings consistent with the presence of acute severe aortic insufficiency, such as high-frequency diastolic fluttering of the mitral valve or, possibly, the interventricular septum (depending upon jet direction) and premature mitral valve closure, are not demonstrated. With hypertrophic obstructive cardiomyopathy, increased thickness of the interventricular septum and systolic anterior motion of the mitral apparatus would be expected; these findings are not demonstrated on this M-mode recording (Fig. 3-18). ",

} , 
// Question 26
{
    question: "A 30-year-old woman presents for evaluation of shortness of breath. As part of that evaluation, a 2D echocardiogram is requested. A highly mobile echodensity was noted in the right atrium (Video 3-2). Based on this image, the most likely diagnosis is:",
    options: [
        "A. The moderator band.",
        "B. A mobile thrombus.",
        "C. The eustachian valve.",
        "D. A pacing catheter.",
        "E. A Chiari complex."
    ], "explanationImage": "https://alhadi415.github.io/top/images/3_26e.JPG" ,
    answer: "E. A Chiari complex.",
    "explanation":" This ultrasound exhibits normal biventricular size and function. The structure in question is a filamentous thin mobile structure in the right atrium extending from the area of the eustachian valve toward the interatrial septum. This finding is most consistent with the presence of a Chiari complex, a remnant of the right venous valve. The appearance here is quite typical in that this filamentous structure has an undulating appearance when viewed in real time. The moderator band is astructure noted within the right ventricle. The eustachian valve would appear as a more solid, protuberant, andnonmobile structure arising along the posterior margin of the IVC and coronary sinus. A pacing catheter would also present as a linear structure traversing the cavity of the right atrium. However, it would not be expected to appear as mobile nor be filamentous in nature as the structure demonstrated in this example. An intracavitary thrombus may appear as a mobile structure within the right atrium. Most often, however, right atrial thrombus has a multilobulated appearance and exhibits a worm  like shape often reflecting its origin from the deep veins. Some authors have described such a thrombus as having “popcorn” appearance. The thin, filamentous, and mobile nature of this structure and its typical anatomical location make a thrombus very unlikely in this situation.    ",

},

// Question 27
{
    question: "A 60-year-old man presents to the hospital with 2 weeks of fever and shortness of breath. As part of his diagnostic evaluation, a 2D echocardiogram is obtained. The image in Video 3-3 is representative of the findings on the complete echocardiogram. Based on this image, the following conclusions can be drawn:",
    options: [
        "A. A vegetation involving the mitral valve is present.",
        "B. A left pleural effusion and pericardial effusion are present.",
        "C. A large pericardial effusion with evidence of tamponade is present.",
        "D. A large left pleural effusion is present."
    ],"explanationImage": "https://alhadi415.github.io/top/images/3_27e.JPG" ,
    
    answer: "B. A left pleural effusion and pericardial effusion are present.",
    "explanation":" This patient with fever and shortness of breath has both a large left pleural effusion and a small-to-moderate sized pericardial effusion. No evidence of right ventricular diastolic collapse or left atrial collapse is noted to suggest the diagnosis of a pericardial effusion under significant pressure. The limited images of the mitral valve do not show a mobile or oscillating echodensity that would be diagnostic of vegetation involving the mitral valve. While a large left pleural effusion is present, the most precise answer also should describe the presence of the pericardial effusion. In Panel A, the pericardial effusion (Pericard Eff) and pleural effusion (PL Eff) are illustrated. As shown in this still frame, the descending thoracic aorta (*) serves as a useful marker to help differentiate left pleural effusions from pericardial effusions. Typically pleural effusions lie posterior to the descending thoracic aorta while pericardial effusions lie in a more anterior location. In this example the pericardial reflection is well visualized (black arrow) and helps to clearly differentiate the pleural from pericardial spaces. In panel B, pericardial effusion (Pericard Eff) adjacent to the lateral borders of the right atrium (RA) and left ventricle (LV) is visualized (arrows). No evidence for right heart compression is evident. RV, right ventricle ",


},

// Question 28
{
    question: "A 75-year-old woman undergoes echocardiography for the evaluation of chest pain. Video 3-4 shows a parasternal long axis view. The image shown demonstrates:",
    options: [
        "A. Marked left atrial enlargement.",
        "B. A large thoracic mass.",
        "C. A dissection involving the descending aorta.",
        "D. Both a pericardial and pleural effusion."
    ],"explanationImage": "https://alhadi415.github.io/top/images/3_28e.JPG",
    answer: "B. A large thoracic mass.",
    "explanation":" . In Fig. 3-19A, the echocardiogram shows that the patient has a large hiatal hernia. The accompanying CT scan in Fig. 3-19B demonstrates a hiatal hernia (large white arrow) that is clearly encroaching on the left atrium (smaller white arrow). Hiatal hernias are commonly encountered in clinical echocardiography and are seen as cystic masses. These masses may be mistaken for an atrial spaceoccupying structure. With transthoracic echocardiography, the administration of a carbonated beverage can produce a contrast effect within the hiatal hernia and can be used as a diagnostic maneuver to demonstrate its true nature as a pseudomass. Although perflutren contrast would certainly demonstrate whether this structure is cardiac or vascular, it would not be as likely to unambiguously make the diagnosis. Agitated saline injected through the left antecubital vein is useful for many indications, including helping to diagnosis an anomalous left superior vena cava draining into the coronary sinus. In general, the structure shown is too large to be a dilated coronary sinus. Finally, a Valsalva maneuver might be helpful in the diagnosis of a hiatal hernia, in that it might provoke a “disparate degree of encroachment on the left atrium attributable to respiratory motion.” However, ingestion of a carbonated beverage would likely make the diagnosis clearer     ",

},

// Question 29
{
    question: "Of the following, the maneuver that would most likely clarify the diagnosis would be:",
    options: [
        "A. Ingestion of a carbonated beverage.",
        "B. Injection of agitated saline contrast through the left antecubital vein.",
        "C. Administration of a perflutren contrast agent.",
        "D. Valsalva maneuver."
    ],"explanationImage": "https://alhadi415.github.io/top/images/3_29e.JPG",
    answer: "A. Ingestion of a carbonated beverage.",
    "explanation":" . In Fig. 3-19A, the echocardiogram shows that the patient has a large hiatal hernia. The accompanying CT scan in Fig. 3-19B demonstrates a hiatal hernia (large white arrow) that is clearly encroaching on the left atrium (smaller white arrow). Hiatal hernias are commonly encountered in clinical echocardiography and are seen as cystic masses. These masses may be mistaken for an atrial spaceoccupying structure. With transthoracic echocardiography, the administration of a carbonated beverage can produce a contrast effect within the hiatal hernia and can be used as a diagnostic maneuver to demonstrate its true nature as a pseudomass. Although perflutren contrast would certainly demonstrate whether this structure is cardiac or vascular, it would not be as likely to unambiguously make the diagnosis. Agitated saline injected through the left antecubital vein is useful for many indications, including helping to diagnosis an anomalous left superior vena cava draining into the coronary sinus. In general, the structure shown is too large to be a dilated coronary sinus. Finally, a Valsalva maneuver might be helpful in the diagnosis of a hiatal hernia, in that it might provoke a “disparate degree of encroachment on the left atrium attributable to respiratory motion.” However, ingestion of a carbonated beverage would likely make the diagnosis clearer     ",

},

// Question 30
{
    question: "A 73-year-old woman develops profound dyspnea and chest pressure after an emotional encounter with her parish priest. She has a history of hypertension and depression but is otherwise well. Troponin I at 6 hours is abnormal. Based on the data you have, the most likely diagnosis is:",
    options: [
        "A. An acute left anterior descending artery (LAD) territory infarction.",
        "B. Apical hypertrophic cardiomyopathy.",
        "C. Stress cardiomyopathy.",
        "D. None of the above."
    ],
    answer: "C. Stress cardiomyopathy.",
    "explanation":" This patient’s syndrome is consistent with the syndrome of stress cardiomyopathy, apical variety. Thanks to the widespread availability of echocardiography, this is a syndrome that is now widely recognized. The initial reports of this syndrome came from Japanese investigators, who have given it the name “takotsubo” because the shape of the ventricle in systole is reminiscent of an octopus trap, with a narrow neck and wide bottom. Biomarker release is different than acute myocardial infarction (MI), with peak CPK determinations much lower, and it can even be normal. Resolution of the wall motion abnormality can be seen as early as 48 hours following symptom onset.At present, stress cardiomyopathy is a clinical diagnosis, even one of exclusion, in patients presenting with achest pain syndrome. Criteria have been published byTsuchihashi et al. These include chest symptoms or electrocardiographic changes suggestive of acute myocardial infarction, reversible apical dysfunction demonstrated by ventriculography, and absence of significant coronary artery narrowing on coronary arteriography performed within 48 hours of symptom onset. More recently, investigators in western countries, including the United States, have described an identicalclinical syndrome. The typical patient is a woman in the seventh decade who experiences chest symptoms triggered by, or in association with, severe emotional distress or a medical procedure. At initial presentation, transient pical ballooning is difficult, if not impossible to distinguish from acute LAD territory MI. The extent of wallmotion abnormality on echocardiography, in our experience, tends to exceed that seen in LAD territory infarction, in that the akinetic areas tend to involve more than one coronary perfusion territory; this has been confirmed by more recent series. However, the diagnosis is made by the return of function. The ubiquity of emotional stress or preceding medical illness (often a respiratory crisis) is suggestive of catecholamine toxicity. The distribution of wall motion abnormalities far exceeds the usual territory of the LAD coronary artery because it involves so much of the inferior wall. Nevertheless, a cardiac catheterization should still be strongly considered to exclude CAD. There is really no significant evidence for apical hypertrophic cardiomyopathy. In apical hypertrophic cardiomyopathy, there is significant hypertrophy confined to the apex of the LV.                   ",

},

// Question 31
{
    question: "The patient continues to have symptoms and is taken to the catheterization suite, where coronary arteriography shows nonobstructive disease. The findings on M-mode echocardiography are most consistent with:",
    options: [
        "A. Myocardial rupture.",
        "B. Mitral regurgitation due to papillary muscle dysfunction.",
        "C. LV outflow tract obstruction.",
        "D. Ventriculoseptal rupture."
    ],"explanationImage": "https://alhadi415.github.io/top/images/3_31e.JPG",
    "questionImage": "https://alhadi415.github.io/top/images/3_31q.JPG",
    
    answer: "C. LV outflow tract obstruction.",
    "explanation":" This patient has developed LV outflow tract (LVOT) obstruction with significant mitral regurgitation as shown in Figure 3-11 and Video 3-6. Figure 3-20A highlights systolic anterior motion of the mitral valve in this systolic frame. Figure 3-20B demonstrates turbulent LVOT flow as well as MR. It is likely that the hyperdynamic function at the base of the heart, along with unfavorable geometry in this region, has led to conditions which promote obstruction. The mechanism is similar to what is observed in hypertrophic cardiomyopathy or even in individuals with large LAD territory MI. ",


} ,

// Question 32
{
    question: "How would you report the LV function based on the calculated EF of 40% (200−120)/200 × 100%? This would place the EF in the:",
    options: [
        "A. Normal EF.",
        "B. Low normal EF.",
        "C. Reduced EF."
    ],
    answer: "C. Reduced EF.",
    "explanation":" The calculated EF would be 40%,(200–120)/200  100%. This would place this EF in the reduced or abnormal range. ",

} ,

// Question 33
{
    question: "Longitudinal strain is performed and is shown in Video 3-8. Do these data support your conclusion from question 32?",
    options: [
        "A. Support.",
        "B. Do not support."
    ],
    answer: "A. Support.",
    "explanation":" The strain values are low, which implies systolic dysfunction in the longitudinal plane. ",

},

// Question 34
{
    question: "Tissue Doppler tracings obtained from the septal and lateral annulus (Fig. 3-12A, 3-12B). Given these data, of the following choices, which is the least likely diagnosis for the LV structure and functional findings?",
    options: [
        "A. Hypertrophic cardiomyopathy.",
        "B. Athletic heart syndrome.",
        "C. Cardiac sarcoidosis.",
        "D. Coronary artery disease."
    ],"questionImage": "https://alhadi415.github.io/top/images/3_34q.JPG",
    answer: "B. Athletic heart syndrome.",
    "explanation":" To summarize, the data demonstrate a reduced EF, without significant focal wall motion abnormalities or focal areas of necrosis. The tissue Doppler e’ is low for an individual of this age group. The data shown point to a diffuse myopathic disease and point away from the diagnosis of athletic hypertrophy. This is because, while global function (e.g., EF) may be reduced in athletes, it is highly unlikely that tissue Doppler velocities would be low. Cardiac sarcoidosis is unlikely because this tends to create focal wall motion abnormalities because of focal infiltration and inflammation. Finally, ischemic heart disease is possible but would tend to be associated with focal wall motion abnormalities, as opposed to more global dysfunction. It can be challenging to distinguish hypertrophic cardiomyopathy from secondary causes of hypertrophy, the most commonly encountered of which, of course, is hypertension. However, given the patient’s history, coronary artery disease is the more likely of the two, statistically. This patient underwent an extensive evaluation which included cardiac MR and coronary arteriography. The arteriography showed no evidence of obstructive CAD and the MR showed patchy late enhancement using gadolinium. The calculated volumetric EF was 42%. Subsequent myocardial biopsy was interpreted as showing evidence of hypertensive heart disease.         ",

}


  ];
  