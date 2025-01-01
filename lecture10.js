const questions =[
    // Question 1
    {
        "question": "The change in left ventricular (LV) function attributable to cell therapy is sought in a postinfarct patient. Which of the following echocardiographic measures is the most feasible and closest analog of systolic elastance as a marker of myocardial contractility?",
        "options": [
            "A. Ejection fraction (EF).",
            "B. Systolic strain rate.",
            "C. Myocardial performance (“Tei”) index.",
            "D. Systolic strain.",
            "E. dP/dt measured from the mitral regurgitant jet."
        ],
        "answer":  "B. Systolic strain rate.",
        "explanation": "Contractility is a term that is often misused to describe systolic function. In fact, it is a parameter that reflects systolic function independent of loading. Changes in cardiac function can be attributed to alterations in contractility, if heart rate, conduction velocity, preload, and afterload are held constant. In a study of closed-chest dogs during five different inotropic states, simultaneous LV volume and pressure (obtained from a combined conductance/pressure catheter) and septal tissue velocity measurement showed strain rate to correspond to the contractility marker, dP/dt. It is important to recognize that strain rate for this purpose relates to tissue velocity–based deformation, which is obtainable at high frame rate (usually >100/sec), and not speckle-based strain rate, which is derived as the maximal gradient from the strain curve, but is constrained by a lower acquisition rate (usually 70/sec). Although tissue velocity imaging strain rate has problems (related to signal noise and the directional component of Doppler) that are avoided by 2D strain, the ability to obtain accurate strain rate is an important limitation of speckle strain and needs to be kept in mind in relation to the potential application of these methods."
    },

    // Question 2
    {
        "question": "A patient after inferior infarction is thought on clinical grounds to have right ventricular (RV) infarction. Which parameters give a reliable assessment of RV function?",
        "options": [
            "A. 2D RV EF.",
            "B. Myocardial performance (Tei) index.",
            "C. Tricuspid annular plane displacement (TAPSE).",
            "D. RV S'.",
            "E. None of the above are reliable."
        ],
        "answer":   "E. None of the above are reliable.",
        "explanation": "The diagnosis of RV infarction should be suspected with hemodynamic changes in a patient after inferior MI, and echocardiography is confirmatory in a qualitative sense. The problem relates to quantitation—the right ventricle is a nongeometric chamber, and 2D volumes are often underestimated because images are frequently off-axis. Depending on whether ESV and EDV are underestimated to the same degree (they may not be), 2D-EF may even vary according to view. TAPSE and RV S' reflect longitudinal displacement and offer a means of overcoming the geometric limitations of EF calculation. Both may be influenced by the site of MI. The Tei index is also a reasonable choice, as it is independent of RV geometry and it is not purely a measure of systolic function. RV systolic function is notoriously difficult to quantify! There is evidence that the use of 3D echocardiography can overcome the complexities that derive from its crescentic and irregular shape, and very likely RV evaluation will become an important indication for 3D echocardiography."
    },

    // Question 3
    {
        "question": "The development of end-systolic cavity obliteration during stress echocardiography reduces the development of ischemia, likely because of reduced wall stress. Wall stress is:",
        "options": [
            "A. Proportionate to transmural pressure and chamber size.",
            "B. Inversely proportionate to transmural pressure and chamber size.",
            "C. Proportionate to wall thickness.",
            "D. The same as systolic strain.",
            "E. Readily measured on a regional basis."
        ],
        "answer": "A. Proportionate to transmural pressure and chamber size.",
        "explanation": "The measurement of wall stress is one of the Holy Grails of hemodynamic assessment, and should be matched to systolic strain—although there are sufficient ranges of error with the measurement of both as to make this correlation difficult with current technologies. Wall stress is proportionate to transmural pressure and chamber size and inversely related to wall thickness. From a noninvasive standpoint, although volume and wall thickness can be measured, chamber pressure is more difficult as peripheral and central pressure may be significantly different. The use of tonometry (with a transfer function) may overcome the latter, although this method is not in routine use in most echocardiography laboratories. Although global equations for stress are described, regional stress varies in accordance with regional curvature. These calculations may be difficult because curvature assessment is problematic—possibly another matter that might be addressed by the use of 3D echocardiography. Nonetheless, wall stress appears to be a determinant of local remodeling, and the development of cell therapies will eventually mandate an approach to the measurement of this entity."
    },

    // Question 4
    {
        "question": "Visual assessment of EF is sometimes required (e.g., in an emergency). What are the potential limitations of visual EF?",
        "options": [
            "A. Inability to interrogate multiple imaging planes simultaneously.",
            "B. Image quality.",
            "C. Extremes of heart rate.",
            "D. Experience of the reviewer.",
            "E. All of the above."
        ],
        "answer": "E. All of the above.",
        "explanation": "As in other qualitative assessments in echocardiography, reviewer experience is an important determinant of accuracy—an expert eye has been shown to be analogous to the trackball for EF measurements. Like all 2D assessments, it is dependent on image quality. Extremes of heart rate can make the assessment challenging and the tomographic approach to the postinfarct ventricle is important. However, visual EF should not be considered the 'standard of care.' Current guidelines propose the biplane Simpson method as the methodology of choice for volume and EF measurement. An increasing literature supports the use of 3D echocardiography for LV volume and EF measurements. In particular, when echocardiographic measurements of EF may be a component of major decisions, such as suitability for implantable defibrillator or cardiac resynchronization devices, the accuracy and reproducibility of 3D imaging may be attractive. Although quantitation is accepted as the preferred method, potential problems with respect to spatial and temporal resolution need to be considered. Concerns about spatial resolution can be addressed by appropriate depth and zoom; LV opacification should be considered if two or more myocardial segments are inadequately visualized. Temporal resolution is an issue to the extent that the time course of contraction is neglected by assessment of only end-diastolic and end-systolic images, and global strain or similar parameters may help address this."
    },

    // Question 5
    {
        "question": "A patient presenting with chest pain undergoes an echocardiogram during pain. The presence of segmental wall motion abnormality is:",
        "options": [
            "A. A marker of abnormal myocardium.",
            "B. Indicative of a high likelihood of myocardial ischemia.",
            "C. Identified with thickening of <50% or excursion <5 mm.",
            "D. Uninterpretable in the setting of left bundle branch block (LBBB).",
            "E. Useful in a diagnostic sense but not prognostically."
        ],
        "answer":   "C. Identified with thickening of <50% or excursion <5 mm.",
        "explanation": "Wall motion abnormalities are usually identified with thickening of <50% or excursion of <5 mm. They are not necessarily a marker of an abnormal myocardium (normal inferior and posterior walls in particular may be hypokinetic) and do not necessarily indicate ischemia (they may be preexisting). Wall thickening (rather than motion or timing) is interpretable with an LBBB. The extent and severity of wall motion abnormality have similar prognostic value to EF."
    },

    // Question 6
    {
        "question": "After implantation of a biventricular pacing device, a 55-year-old patient with dilated cardiomyopathy continues to complain of functional class III symptoms and there is no reduction of LV volumes. What factors are important in considering device optimization?",
        "options": [
            "A. There is no evidence to support its use.",
            "B. The role of mechanical dyssynchrony is in question since publication of the PROSPECT results.",
            "C. The iterative technique for aortic valve (AV) optimization is based on observation of the LV filling curve at various pacing settings.",
            "D. Site of previous infarction.",
            "E. Site of the LV lead."
        ],"explanationImage": "https://alhadi415.github.io/top/images/10_6e.JPG",
        "answer": "C. The iterative technique for aortic valve (AV) optimization is based on observation of the LV filling curve at various pacing settings.",
        "explanation": "There is good evidence to support the benefit of device optimization—both on the basis of its performance in the landmark CRT studies and on the basis of recent publications. The most feasible (and probably most effective) is the iterative technique for AV optimization. This involves pulsed Doppler mitral inflow estimation, with shortening and lengthening of AV delay and observation of the morphology of the transmitral-filling wave. If AV delay is too short, ventricular activation will occur before completion of the mitral A wave. If AV delay is too long, ventricular systole will encroach on diastolic filling time. At the optimal setting of paced AV delay, the time-velocity integral of transmitral flow will be optimized, with no truncation of the mitral A wave."
    },

    // Question 7
    {
        "question": "Following anterior myocardial infarction (MI), a 70-year-old man has an EF of 40% with an end-systolic volume (ESV) of 95 ml (50 ml/m²). In what range is his 5-year mortality?",
        "options": [
            "A. 10%.",
            "B. 15%.",
            "C. 20%.",
            "D. 30%.",
            "E. 50%."
        ],
        "answer": "D. 30%.",
        "explanation": "The assessment of LV volumes carries incremental prognostic information to EF alone. Angiographic data have shown that in patients with mild LV dysfunction, ESV of <95 ml is associated with a 5-year mortality of 10%, but more dilated ventricles are associated with a much worse outcome (30%), and similar findings have been described with echocardiography. In the context of these findings, it is extraordinary that clinical guidelines (e.g., criteria for timing of surgery in regurgitant valve disease) are still based on LV dimensions. The evidence of incremental information based on LV volumes is an argument for more accurate LV volume calculations (e.g., with 3D echocardiography). It is important that these studies have assessed systolic rather than diastolic volume, which may be increased in the setting of MR, which is widely recognized as a determinant of outcome."
    },

    // Question 8
    {
        "question": "In the course of auditing the activity of your echocardiography laboratory, you find that 18% of studies have had a previous echocardiogram. On investigating the matter further, you find that the majority are for inpatients with worsening heart failure (HF). Which of the following are true regarding repeat echocardiograms?",
        "options": [
            "A. Repeat echo is a class I indication from the ACC/AHA guidelines.",
            "B. 95% confidence intervals for EF are ±11%.",
            "C. 95% confidence intervals for LV mass (LVM) are ±60 g.",
            "D. All of the above.",
            "E. None of the above."
        ],
        "answer": "D. All of the above.",
        "explanation": "Repeat 2D echocardiography, although often performed for the reassessment of LV function, is not a sensitive or reliable tool for this purpose. The 95% confidence intervals for EF are ±11% and those for LVM are ±60 g. Both are large changes in biological terms, meaning that minor changes (such as may occur from year to year in the progression of HF—maybe 5%, or in response to antihypertensive therapy over a year or two—maybe 20 g) are well under the limits of variability of the measurement. The resulting changes are more meaningful in populations than they are in individuals, and the high-level support for appropriateness is perhaps more based on faith than on evidence. Sources of variability include not only intra- and interobserver variation, acquisition issues (equipment and sonographers), regression to mean, and biological variation. As some of this variation arises from differences in imaging axis between studies, it is potentially reducible using 3D imaging techniques, and there is some evidence to support this."
    },

    // Question 9
    {
        "question": "LV strain has been proposed as a simple quantitative tool for assessing LV function. Which of the following is associated with reduced strain, irrespective of myocardial status?",
        "options": [
            "A. Decreased afterload.",
            "B. Decreased preload.",
            "C. Decreased heart rate.",
            "D. All of the above.",
            "E. None of the above."
        ],
        "answer":  "B. Decreased preload.",
        "explanation": "Strain can be considered as an analog of regional EF, as it reflects shortening from the beginning to the end of systole. Reduced preload—which is associated with reduced LV cavity size—will reduce strain, reflecting the lower position of the ventricle on the Frank-Starling curve as well as the lower deformation of an already empty LV cavity. Conversely, reduction of afterload is associated with increased strain, reflecting the lower impedance to LV ejection. Higher heart rate is associated with a reduction of LV filling and reduced strain. These observations are important in understanding the strain and strain rate response to dobutamine stress. Strain rate (which is time dependent) shows a linear increment with dobutamine, whereas strain increases initially but decreases toward peak dose, as the stroke volume falls at higher heart rate."
    },

    // Question 10
    {
        "question": "Measurement of midwall shortening provides information that is inconsistent with endocardial shortening in:",
        "options": [
            "A. Normal hearts.",
            "B. Dilated cardiomyopathy.",
            "C. Concentric remodeling.",
            "D. Eccentric LV hypertrophy (LVH).",
            "E. Concentric LVH."
        ],"explanationImage": "https://alhadi415.github.io/top/images/10_10e.JPG",
        "answer":  "E. Concentric LVH.",
        "explanation": "Endocardial shortening exceeds that in the midwall and is influenced by LV geometry. Midwall measurements are thought to be a better reflector of contractility, perhaps because the circumferential stress vector and the direction of fiber shortening are parallel (midwall fibers are circumferential). This appears to be important in concentric LVH—for example, about one-third of patients with aortic stenosis and normal endocardial shortening have reduced midwall shortening."
    },

    // Question 11
    {
        "question": "Accurate measures of LV volumes are needed in the course of follow-up of patients with asymptomatic mitral regurgitation (MR). Which is the most accurate option?",
        "options": [
            "A. 2D echocardiogram.",
            "B. 2D echocardiogram with contrast.",
            "C. 3D echocardiogram.",
            "D. 3D echocardiogram with contrast.",
            "E. Transesophageal echocardiogram."
        ],"explanationImage": "https://alhadi415.github.io/top/images/10_11e.JPG",
        "answer": "D. 3D echocardiogram with contrast.",
        "explanation": "The current guidelines use M-mode LV dimensions as the marker of LV size in the serial assessment of the LV in regurgitant valve lesions. This has the benefit of an established evidence base but the disadvantage of potentially misleading data from off-axis imaging. The tendency to underestimate LV volumes using 2D imaging is reduced by the use of LV opacification, probably because the sonographer becomes more able to identify the true apex and avoid foreshortening. Probably for similar reasons, 3D echocardiography also avoids the underestimation of LV volumes. The combination of 3D imaging and LV opacification offers LV volumes that are closest to those provided by cardiac magnetic resonance imaging (MRI)."
    },

    // Question 12
    {
        "question": "Given its high workload and distance from nutrient supply, the subendocardium is an important site of pathology. Which techniques could be used to assess subendocardial function?",
        "options": [
            "A. Longitudinal, circumferential, and transverse strain.",
            "B. Integrated backscatter.",
            "C. Myocardial contrast echocardiography with high MI.",
            "D. None of the above.",
            "E. All of the above."
        ],"explanationImage": "https://alhadi415.github.io/top/images/10_12e.JPG",
        "answer":  "A. Longitudinal, circumferential, and transverse strain.",
        "explanation": "The ability to derive strain from 2D images (rather than tissue Doppler, which is directional) has enabled strain assessment not only in the longitudinal plane but also in the radial and circumferential planes. Subendocardial dysfunction causes a reduction of longitudinal function (as subendocardial fibers have a longitudinal orientation). Infractions of relatively limited extent may cause a reduction in longitudinal strain, and the susceptibility of this to worsening strain in proportion to the infarct extent is not completely clear. However, papers in the field are in agreement that the degree of reduction of circumferential and transverse strain is related to the transmural extent of subendocardial dysfunction."
    },

    // Question 13
    {
        "question": "Which of the statements regarding the application of new technologies is true?",
        "options": [
            "A. Systolic velocity is a useful marker of regional systolic function.",
            "B. 3D measurements will be useful for the assessment of diastolic function.",
            "C. Deformation analysis is useful for the assessment of myocardial viability.",
            "D. None of the above.",
            "E. All of the above."
        ],"explanationImage": "https://alhadi415.github.io/top/images/10_13e.JPG",
        "answer":"C. Deformation analysis is useful for the assessment of myocardial viability.",
        "explanation": "There has been such a prolific expansion of new technologies that it is difficult to keep track of which modality can help with which clinical question. Generally, tissue velocity has been useful for timing (e.g., synchrony) and measurement of global phenomena (e.g., E' velocity as a surrogate of tau, the relaxation time constant), but it is subject to tethering by adjacent segments, so it is not a good marker of segmental function. Accurate volumetric measurements are possible with 3D, but at a low temporal resolution—although there are no data to confirm this, it seems unlikely that this modality will be useful for the assessment of diastolic function, where the time for volume changes is critical. Deformation analysis with speckle strain can provide information on the transmural distribution of scar, and the response to low-dose dobutamine has been quantified with both tissue velocity and speckle strain."
    },

    // Question 14
    {
        "question": "Which of the following statements is true regarding the application of new technologies to the different stages of HF?",
        "options": [
            "A. Myocardial deformation is of value in the detection of stage B HF.",
            "B. 3D measurements are of most value in stages C and D.",
            "C. Tissue velocity is of use in all stages.",
            "D. None of the above.",
            "E. All of the above."
        ],"explanationImage": "https://alhadi415.github.io/top/images/10_14e.JPG",
        "answer": "E. All of the above.",
        "explanation": "The ongoing adverse outcomes associated with HF have spurred an increasing interest in recognition of the earlier stages of HF and attempts to prevent progression. The main contribution of tissue velocity has been to the assessment of tissue E', which is a sensitive marker of myocardial impairment that may be reduced even in the presence of risk factors, and in the estimation of LV filling pressure, which may support the diagnosis of later stage HF. Myocardial strain may be a sign of preclinical dysfunction in early stage disease, although its ability to quantify scar may also make it helpful in later disease. The main contributions of LV volume calculation are of most value in late stage disease, where the LV cavity is dilated and EF is reduced."
    },

    // Question 15
    {
        "question": "A patient with hypertension has septal and posterior wall thickness of 12 and 13 mm, respectively, with an end-diastolic dimension of 52 mm. How would you characterize these LV dimensions?",
        "options": [
            "A. Normal LV geometry.",
            "B. Concentric remodeling.",
            "C. Concentric hypertrophy.",
            "D. Eccentric hypertrophy.",
            "E. None of the above."
        ],"explanationImage": "https://alhadi415.github.io/top/images/10_15e.JPG",
        "answer": "C. Concentric hypertrophy.",
        "explanation": "Relative wall thickness (RWT) = 2 × PWd/LVd = 2 × 13/52 = 0.5. LVM = 1.04([LVd + IVS + PW])^3 - LVd^3 - 13.6 = 1.04(7.7^3 - 5.2^3) - 13.6 = 342 g (or 190 g/m² for BSA 1.8). LVM and LV geometry are both important determinants of outcome. In this patient, both LVM and relative wall thickness are increased, indicating concentric LVH. Concentric remodeling (wall thickening without increased mass) is also associated with adverse outcome."
    },

    // Question 16
    {
        "question": "A 48-year-old woman presents to the hospital with chest pain following a motor vehicle accident. She has anterior ST segment elevation and an echocardiogram is performed because of pulmonary congestion. Color Doppler of the LV outflow tract shows aliasing. Echocardiographic images in the apical four- and two-chamber views are provided in Figure 10-1 and Videos 10-1A, B, and C. The likely diagnosis is:",
        "options": [
            "A. Hypertrophic cardiomyopathy (HCM).",
            "B. Large anterosepal MI.",
            "C. Stress (Takotsubo) cardiomyopathy.",
            "D. Multivessel ischemia.",
            "E. Cardiac contusion."
        ],"questionImage": "https://alhadi415.github.io/top/images/10_16q.JPG",
        "answer":  "C. Stress (Takotsubo) cardiomyopathy.",
        "explanation": "The history of chest pain onset following emotional stress is the classical presentation of stress cardiomyopathy (Takotsubo syndrome, TTS). TTS mimics acute ST segment elevation myocardial infarction with normal epicardial coronary arteries and spontaneously resolves with a favorable prognosis. The most common trigger is severe emotional stress, and women are more often involved than men. The distribution is atypical for coronary territories—although the wall motion abnormalities involve the apex, they involve the entire mid-apical LV (which includes right and circumflex coronary territories) but not the base. The presence of flow acceleration in the LV outflow tract reflects distortion of the LV anatomy rather than HCM."
    },

    // Question 17
    {
        "question": "A systolic murmur is heard in a 67-year-old man, 3 days following MI. The echocardiogram in Figure 10-2 and Videos 10-2A and B show:",
        "options": [
            "A. Papillary muscle rupture.",
            "B. Postinfarct ventricular septal defect (VSD).",
            "C. Congenital (perimembranous) VSD.",
            "D. Congenital (muscular) VSD.",
            "E. Ischemic MR."
        ],"questionImage": "https://alhadi415.github.io/top/images/10_17q.JPG",
        "answer":  "B. Postinfarct ventricular septal defect (VSD).",
        "explanation": "The development of a systolic murmur postinfarction may be due to MR or a VSD. In contrast to congenital VSDs, postinfarct VSDs are identified within areas of wall motion abnormality and are often irregularly shaped. Cardiac MRI is an alternative diagnostic approach, but the defects are normally readily visualized by transthoracic echocardiography. The use of 3D echocardiography may minimize the possibility of missing multiple defects, which may be important in planning device closure."
    },

    // Question 18
    {
        "question": "A 27-year-old man is found to have anterolateral T-wave inversions when an ECG is performed during a routine insurance physical examination. The echocardiogram with and without contrast in Figure 10-3 and Videos 10-3A, B, C and D shows:",
        "options": [
            "A. Apical tumor (fibroma).",
            "B. Apical muscular band.",
            "C. Apical HCM (Yamaguchi variant).",
            "D. Apical foreshortening.",
            "E. Noncompaction cardiomyopathy."
        ],"questionImage": "https://alhadi415.github.io/top/images/10_18q.JPG",
        "answer": "C. Apical HCM (Yamaguchi variant).",
        "explanation": "The pattern of apical thickening is typical of apical HCM. Like other localized abnormalities (e.g., papillary muscle structure), these may be more readily recognized with contrast (or MRI). This condition is most commonly discovered in middle-aged men as an incidental finding of giant negative T waves (1–4 mV) in the left precordial leads at electrocardiography. Although changes in T-wave morphology can be abrupt, the findings usually evolve over several years. The prognosis of apical HCM is generally benign, although HF may occur because of atrial fibrillation and LV aneurysm. The alternative responses (apical fibroma or muscular band) would be expected to be more localized. Apical foreshortening is a potential consideration, but the ventricular length seems normal. Noncompaction cardiomyopathy is associated with apical thickening but does not encroach on the cavity and is characterized by deep apical trabeculations."
    },

    // Question 19
    {
        "question": "A 68-year-old woman presents with HF. There is no family history, she has previously been well and takes no medication. The ECG shows low voltage but is otherwise unremarkable. The echocardiogram in Videos 10-4A and B shows low tissue velocity (E' 4 cm/sec) with left atrial enlargement and a pseudonormal filling pattern. The likely diagnosis is:",
        "options": [
            "A. Fabry disease.",
            "B. Hypertensive heart disease.",
            "C. HCM.",
            "D. Amyloidosis.",
            "E. Sarcoidosis."
        ],
        "answer": "D. Amyloidosis.",
        "explanation": "The findings suggest an infiltrative cardiomyopathy. The lack of ECG changes despite severe wall thickening is inconsistent with hypertensive heart disease and HCM. Of the infiltrative conditions, sarcoid is usually patchy and the presentation of Fabry disease might be expected at a younger age. The diagnosis is most likely amyloidosis. Cardiovascular manifestations include congestive HF, vascular and conduction abnormalities, and autonomic dysfunction. In the early stages, the disease is characterized by LV thickening in the absence of a history of hypertension or ECG evidence of LVH. The typical restrictive filling pattern is seen in late stage disease and earlier disease may just show a pseudonormal pattern. The 'ground glass' consistency to the myocardium may be hard to recognize with harmonic imaging and suspicion of this should lead to the use of fundamental imaging. Cardiac MRI and scintigraphy are alternative diagnostic approaches."
    },

    // Question 20
    {
        "question": "A 48-year-old man with renal impairment has presented late after an MI. There are no Q waves and preservation of R waves on the ECG but an apical wall motion abnormality. Coronary angiography has been withheld because of concerns regarding possible nephrotoxicity, so a myocardial contrast perfusion study is performed with a destruction-replenishment protocol (Fig. 10-4 and Videos 10-5A and B).",
        "options": [
            "A. Apical scar.",
            "B. Apical thrombus.",
            "C. Apical muscle band.",
            "D. Apical noncompaction.",
            "E. Apical tumor."
        ],"explanationImage": "https://alhadi415.github.io/top/images/10_20e.JPG",
        "questionImage": "https://alhadi415.github.io/top/images/10_20q.JPG",
        "answer": "A. Apical scar",
        "explanation": "Despite the apical wall motion abnormality, bubbles return to this area after the flash (arrows, Fig. 10-22), indicating an intact microcirculation. Myocardial contrast echocardiography has been used to define the transmural extent of infarction and to differentiate stunned from necrotic myocardium. Its accuracy in the prediction of functional recovery is comparable to dobutamine stress echocardiography, perfusion scintigraphy, and cardiac MRI. In the absence of stress testing, it is unclear whether this is ischemic and medical management may not be the best option. Although there is contrast attenuation in the RCA and LCX segments, these are still thickening."
    },

    // Question 21
    {
        "question": "This 2D echocardiogram (apical four-chamber view in Video 10-6) was obtained following an out-of-hospital cardiac arrest in a 37-year-old man, who has continued to have episodes of ventricular tachycardia in the coronary care unit. The findings suggest:",
        "options": [
            "A. RV infarction.",
            "B. Pulmonary embolism (McConnell's sign).",
            "C. Arrhythmogenic RV dysplasia.",
            "D. Pulmonary hypertension and cor pulmonale.",
            "E. Cardiac rotation with off-axis imaging."
        ],
        "answer":  "C. Arrhythmogenic RV dysplasia.",
        "explanation": "Video 10-6 demonstrates preservation of the basal RV with dilatation and dysfunctions of the midwall and apex. McConnell’s sign involves preserved apical function in acute pulmonary embolism and RV infarction or cor pulmonale usually involves the full length of the free wall of the right ventricle. Arrhythmogenic RV dysplasia is an inherited cardiomyopathy characterized by ventricular arrhythmias and structural abnormalities of the right ventricle, due to progressive replacement of the RV myocardium with fatty and fibrous tissue. It is characterized by RV dilatation with wall thinning and trabeculation and can be identified by cardiac MRI or echocardiography. The echocardiographic criteria are reduced RV function, increased RV dimensions (especially the right ventricular outflow tract [RVOT], an RVOT long-axis diastolic dimension of >30 mm being present in 89%), and RV morphologic abnormalities (trabecular derangement in 54%, hyperreflective moderator band in 34%, and sacculations in 17%)."
    },

    // Question 22
    {
        "question": "A 72-year-old patient becomes hypotensive following presentation with a myocardial infarction. The findings of this subcostal image in Video 10-7 suggest:",
        "options": [
            "A. RV infarction.",
            "B. Pulmonary embolism (McConnell's sign).",
            "C. Arrhythmogenic RV dysplasia.",
            "D. Pulmonary hypertension and cor pulmonale.",
            "E. Cardiac rotation with off-axis imaging."
        ],
        "answer":  "A. RV infarction.",
        "explanation": "The images in Video 10-7 demonstrate RV enlargement with reduced function and septal motion consistent with ventricular interaction. In this setting, the most likely explanation is RV infarction. RV infarction is associated with increased in-hospital mortality, so this is an important condition to recognize. When hemodynamic compromise occurs in the setting of inferior infarction, RV dimensions, shape, and global and regional function should be examined carefully. Inferior vena caval congestion often occurs in the setting of reduced RV compliance."
    },

    // Question 23
    {
        "question": "A routine echocardiogram is performed 5 days following primary angioplasty to the left anterior descending coronary artery (Fig. 10-5 and Videos 10-8A–E). The findings suggest:",
        "options": [
            "A. Subacute rupture.",
            "B. Apical muscle band.",
            "C. Apical scar.",
            "D. Apical thrombus.",
            "E. Multivessel coronary artery disease."
        ],"explanationImage": "https://alhadi415.github.io/top/images/10_23e.JPG",
        "questionImage": "https://alhadi415.github.io/top/images/10_23q.JPG",
        "answer":  "D. Apical thrombus.",
        "explanation": "The view demonstrates a wall motion abnormality restricted to the apex and without thinning. The LV opacification images show a persistent apical filling defect, likely representing an early thrombus. These findings may be highly labile in the early period after infarction—cross-sectional studies early after anterior infarction have identified thrombi in 2% of infarcts, especially with a reperfusion time of >3 hours. Contrast echocardiography is the most accurate echocardiographic method of detecting LV mural thrombus, irrespective of physician experience. In an audit of 409 patients undergoing echocardiography for detection of LV thrombus, 46% were nondiagnostic. A contrast-enhanced study gave definitive information on the presence or absence of an LV thrombus in 90% of these patients."
    },

    // Question 24
    {
        "question": "A resting 3D echocardiogram was performed on a 62-year-old patient with type 2 diabetes who presented with dyspnea (Fig. 10-6 and Video 10-9). The findings suggest:",
        "options": [
            "A. Normal LV function.",
            "B. Diffuse LV dysfunction.",
            "C. Left anterior descending scar.",
            "D. Right coronary scar.",
            "E. Left circumflex scar."
        ],"explanationImage": "https://alhadi415.github.io/top/images/10_24e.JPG",
        "questionImage": "https://alhadi415.github.io/top/images/10_24q.JPG",
        "answer":  "C. Left anterior descending scar.",
        "explanation": "The display shows reconstructed images equivalent to the apical four- and two-chamber views, with a short-axis view at the junction of the mid- and basal segments. Figure 10-24D shows a sequence of nine short-axis images from the apex to the base. The left ventricle is enlarged but the wall motion abnormality is restricted to the LAD territory (arrows)."
    },

    // Question 25
    {
        "question": "An asymptomatic patient with normal LV function but severe MR has bileaflet prolapse. She is uncertain as to whether to proceed to mitral repair and undergoes an exercise echocardiogram. The apical four- and two-chamber views in Figure 10-7 and Video 10-10, before and after exercise findings, suggest:",
        "options": [
            "A. Normal LV response to stress.",
            "B. LAD scar.",
            "C. Loss of contractile reserve (CR).",
            "D. Right coronary scar.",
            "E. Left circumflex scar."
        ],"explanationImage": "https://alhadi415.github.io/top/images/10_25e.JPG" ,
        "questionImage": "https://alhadi415.github.io/top/images/10_25q.JPG",
        "answer":   "C. Loss of contractile reserve (CR).",
        "explanation": "Traces of the resting dimensions have been superimposed on the postexercise image to show LV enlargement and LV dysfunction postexercise (Fig. 10-25). Subclinical LV dysfunction may be identified on the basis of a reduced EF response or LV dilatation with exercise. The move toward earlier mitral surgery may be problematic in patients with anterior or bleaflet prolapse, because of a greater risk of failed repair. In this situation, the assessment of CR may permit the detection of subclinical myocyte contractile abnormalities that are apparent experimentally as lower developed force and a negative force-frequency relation, reflecting decreases in peak calcium transients. Initial work with CR in chronic MR documented that preserved CR (a >4% increment of EF) predicted preserved LV function after mitral surgery. Subsequent work showed CR in asymptomatic severe MR to predict clinical outcome and LV function over 3 years. In particular, follow-up EF was preserved in medically treated patients with intact CR but progressively deteriorated in patients without CR. A simpler approach may be the performance of myocardial imaging to identify subclinical dysfunction in this setting."
    },

    // Question 26
    {
        "question": "A 72-year-old woman undergoes an echocardiogram because of symptoms of HF (Fig. 10-8 and Video 10-11). The resting wall motion abnormalities suggest infarctions in:",
        "options": [
            "A. No discrete territory (nonischemic cardiomyopathy).",
            "B. Left anterior descending.",
            "C. Right coronary.",
            "D. Left circumflex.",
            "E. Multiple vessels."
        ],"questionImage": "https://alhadi415.github.io/top/images/10_26q.JPG",
        "answer":  "E. Multiple vessels.",
        "explanation": "There is thinning of the posterior wall, akinesis of the inferior and basal septal walls, and lateral hypokinesis. The apical function appears reduced in the apical four- and three-chamber views. This combination is most commonly seen with multivessel disease. The strain in Figure 10-8 displays low strains in these regions, and the distribution of reduced function is summarized in the polar map display. Strain information has been shown to add incremental prognostic value to both LVH and wall motion assessment."
    },

    // Question 27
    {
        "question": "The strain pattern in the posterior wall of Figure 10-9 suggests:",
        "options": [
            "A. No discrete abnormality.",
            "B. Loss of longitudinal function in the base but not the apex.",
            "C. Loss of longitudinal function in the apex but not the base.",
            "D. Loss of longitudinal function in both the apex and base.",
            "E. Loss of thickening in the whole posterior wall."
        ],"questionImage": "https://alhadi415.github.io/top/images/10_27q.JPG",
        "answer": "B. Loss of longitudinal function in the base but not the apex.",
        "explanation": "The yellow sample is located over the basal-mid posterior, and the turquoise sample over the apical wall (Fig. 10-12). The longitudinal deformation in the basal-mid wall (yellow) shows lengthening (the curve is above the baseline). In the apex, the strain curve (turquoise) varies between negative 16% and 20%, indicating normal shortening. Note that this assessment of endocardial (longitudinal) function may not correspond to the visual assessment of regional function (mainly radial)."
    },

    // Question 28
    {
        "question": "A 62-year-old man undergoes an echocardiogram prior to a stress echocardiogram (Fig. 10-10 and Video 10-12). The biplane Simpson's EF was 37% (end-diastolic volume [EDV] 172, ESV 108). In the presence of a mean global strain of –14% and segmental waveforms as shown:",
        "options": [
            "A. The findings are concordant in showing mildly reduced LV function.",
            "B. Show a discrepancy between radial and longitudinal function.",
            "C. Underestimate the severity of LV dysfunction.",
            "D. Show extensive late contraction (which may identify viability).",
            "E. The problem appears to be nonischemic."
        ],"explanationImage": "https://alhadi415.github.io/top/images/10_28e.JPG",
        "questionImage": "https://alhadi415.github.io/top/images/10_28q.JPG" ,
        "answer": "D. Show extensive late contraction (which may identify viability).",
        "explanation": "The strain curves in each view all include a marker for aortic valve closure (AVC) (Fig. 10-26). Curves relating to the LAD territory show postsystolic contraction (i.e., arrows point to peak strain following AVC). This phenomenon of postsystolic contraction can be seen in a normal myocardium, but in that case is mild. It may on occasion be a passive phenomenon (e.g., in the setting of dyskinesis), but in this case is due to the delayed development of shortening, which reflects reduction of myocardial force generation. The distribution of reduced systolic strain is summarized on the polar map (Fig. 10-26D); findings of 37% EF and global strain of –14% both attest to moderate LV dysfunction."
    },

    // Question 29
    {
        "question": "The resting wall motion abnormalities in Video 10-13 suggest infarctions in:",
        "options": [
            "A. No discrete territory (nonischemic cardiomyopathy).",
            "B. Left anterior descending.",
            "C. Right coronary.",
            "D. Left circumflex.",
            "E. Multiple vessels."
        ],
        "answer": "B. Left anterior descending.",
        "explanation": "The shape of the LV apex is altered and thickening is reduced (see also the strain map). Function in the other territories appears preserved."
    },

    // Question 30
    {
        "question": "After an inferior MI, this 68-year-old woman developed HF and a new systolic murmur was noted. The baseline echocardiogram in Figure 10-11 and Videos 10-14A-C demonstrates severe posteriorly directed MR due to:",
        "options": [
            "A. Papillary muscle rupture.",
            "B. Anterior prolapse.",
            "C. Severe LV dysfunction.",
            "D. Annular enlargement.",
            "E. Posterior leaflet restriction.",
        ],"questionImage": "https://alhadi415.github.io/top/images/10_30q.JPG",
        "answer":  "E. Posterior leaflet restriction.",
        "explanation": "The findings are consistent with ischemic MR due to posterior leaflet restriction caused by inferoposterior infarction. The resulting anterior leaflet 'over-ride' leads to posteriorly directed MR. Ischemic MR is a disease caused by changes of LV structure and function, and contrasts with acute MR, which is an infarct complication related to rupture or stretching of the papillary muscle. Ischemic MR is identified in 50% of post-MI patients, of whom 12% are moderate or severe. Moderate or severe ischemic MR is associated with a threefold increase in HF risk and a 1.6-fold increased risk of death at 5 years. There are two major mechanisms—displacement of the posterior papillary muscle (causing anterior leaflet 'override' and posteriorly directed MR) and LV enlargement, tethering both leaflets and a more central jet."
    },

    // Question 31
    {
        "question": "After 6 months, a follow-up echocardiogram is performed. What process do the findings in Figure 10-12A and B suggest?",
        "options": [
            "A. Scarring of the posterior wall.",
            "B. Response to diuretics and vasodilators.",
            "C. Mitral valve repair.",
            "D. Percutaneous intervention and viable myocardium.",
            "E. None of the above."
        ],"questionImage": "https://alhadi415.github.io/top/images/10_31q.JPG",
        
        "answer":"D. Percutaneous intervention and viable myocardium.",
        "explanation": "There is no evidence of valve repair. The posterior wall has improved and is not scarred. A response to medical therapy would be possible, but at variance with improvement of the posterior wall."
    },

    // Question 32
    {
        "question": "A 61-year-old woman presents with fatigue and edema. The right heart border is prominent on CXR but PA pressure and pulmonary vascular resistance are normal. The echocardiogram is shown in Figure 10-13 and Videos 10-15A–C. The RV findings are consistent with:",
        "options": [
            "A. RV infarction.",
            "B. Pulmonary embolism (McConnell's sign).",
            "C. Arrhythmogenic RV dysplasia.",
            "D. Pulmonary hypertension and cor pulmonale.",
            "E. Ebstein’s anomaly.",
        ],"explanationImage": "https://alhadi415.github.io/top/images/10_32e.JPG",
        "questionImage": "https://alhadi415.github.io/top/images/10_32q.JPG",
        "answer": "E. Ebstein’s anomaly.",
        "explanation": "Ebstein’s anomaly involves 'atrialization' of part of the RV, due to apical displacement of the tricuspid valve (shown with white line in Fig. 10-27). This tricuspid abnormality distinguishes this entity from the alternative diagnoses."
    },

    // Question 33
    {
        "question": "The images in Figure 10-14 and Video 10-16 demonstrate a follow-up scan. What procedure has been undertaken?",
        "options": [
            "A. Tricuspid valve replacement.",
            "B. Heart transplant.",
            "C. Tricuspid valve repair.",
            "D. Heart-lung transplant.",
            "E. None of the above."
        ],"explanationImage": "https://alhadi415.github.io/top/images/10_33e.JPG",
        "questionImage": "https://alhadi415.github.io/top/images/10_33q.JPG",

        "answer": "C. Tricuspid valve repair.",
        "explanation": "Tricuspid valve surgery involves freeing the septal leaflet, which is adherent to the septum, and often an annuloplasty (marked with arrows in Figure 10-28)."
    },

    // Question 34
    {
        "question": "A 39-year-old man presents with HF. The LV echocardiographic findings in Figure 10-15 A and B and Videos 10-17A–D are consistent with:",
        "options": [
            "A. Apical HCM.",
            "B. Laminated apical thrombus.",
            "C. LV noncompaction.",
            "D. Hemangioma of the LV.",
            "E. None of the above."
        ],"explanationImage": "https://alhadi415.github.io/top/images/10_34e.JPG",
        "questionImage": "https://alhadi415.github.io/top/images/10_34q.JPG",
        "answer":  "C. LV noncompaction.",
        "explanation": "LV noncompaction is a developmental abnormality that shows a wide phenotypic spectrum—patients with the most extensive disturbances may develop HF, systemic thromboembolism, and arrhythmias. Although apical soft tissue thickening is seen with all of the above, the characteristic color flow mapping profile showing flow into sinusoids is typical of noncompaction."
    },

    // Question 35
    {
        "question": "The LV filling pattern in Figure 10-16 identifies:",
        "options": [
            "A. Restrictive filling.",
            "B. Heart transplant.",
            "C. Tricuspid valve repair.",
            "D. Heart-lung transplant.",
            "E. None of the above."
        ],"questionImage": "https://alhadi415.github.io/top/images/10_35q.JPG",
        "answer":  "A. Restrictive filling.",
        "explanation": "Noncompaction behaves like a cardiomyopathic process. In this case, the anatomic changes and impaired systolic function are associated with a restrictive filling pattern."
    }
];