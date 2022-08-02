import InformationDiv from "./InformationDiv"

const InformationSection = ({ data }) => {
    const informationApp = data.informationApp
    const Alldata = []
    if (informationApp.userInformation.length === 0) {
        Alldata.push(
            <InformationDiv key={'1'} title={'User Provided Information'} desc={'The Application does not require any user registration. The Application does not require the user to provide any personal information.'} />
        )
    }
    else {
        Alldata.push(
            <InformationDiv key={'1'} title={'User Provided Information'} desc={"This Application need user registration. without registration you can't use the features offered by the Application unless you register with us. When you register with us and use the Application, you generally just provide a " + informationApp.userInformation.map(item => `${item}, `)} />
        )
    }
    if (informationApp.automaticInformation) {
        Alldata.push(
            <InformationDiv key={'2'} title={'Automatically Collected Information'} desc={'In addition, the Application may collect certain information automatically, including, but not limited to, the type of mobile device you use, your mobile devices unique device ID, the IP address of your mobile device, your mobile operating system, the type of mobile Internet browsers you use, and information about the way you use the Application.'} />
        )
    }
    else {
        Alldata.push(
            <InformationDiv key={'2'} title={'Automatically Collected Information'} desc={'This Application does not collect any information automatically, This Application does not share any information automatically with third parties and This Application does not collect precise information about the location of your mobile device.'} />
        )
    }
    if (informationApp.userInformation.length === 0) {
        Alldata.push(
            <InformationDiv key={'3'} title={'Data Retention Policy, Managing Your Information'} desc={'This Application does not automatically collect, share nor retain any information.'} />
        )
    }
    else {
        Alldata.push(
            <div key={'3'}>
                <h1 className="text-xl font-bold text-left mb-3">Data Retention Policy, Managing Your Information</h1>
                <p className="mb-3">We will retain User Provided data for as long as you use the Application. If you’d like us to delete User Provided Data that you have provided via the Application, please contact us at <a className='text-blue-500' href={`mailto:${data.developerEmail}`}>{data.developerEmail}</a> and we will respond in a reasonable time. Please note that some or all of the User Provided Data may be required in order for the Application to function properly</p>
            </div>
        )
    }
    Alldata.push(
        <InformationDiv key={'4'} title={'Children'} desc={'Our Application does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from anyone under the age of 13. We do not use the Application to knowingly solicit data from or market to children under the age of 13.'} />
    )
    if (informationApp.appGeoLocation) {
        Alldata.push(
            <InformationDiv key={'9'} title={'Does the Application collect precise real time location information of the device'} desc={'When you use this application , we may use GPS technology (or other similar technology) to determine your current location in order to determine the city you are located within and display a location map with relevant advertisements. We will not share your current location with other users or partners. If you do not want us to use your location for the purposes set forth above, you should turn off the location services for the mobile application located in your account settings or in your mobile phone settings and/or within the mobile application.'} />
        )
    }
    else {
        Alldata.push(
            <InformationDiv key={'9'} title={'Does the Application collect precise real time location information of the device'} desc={'This Application does not collect precise information about the location of your mobile device.'} />
        )
    }
    Alldata.push(
        <InformationDiv key={'5'} title={'Security'} desc={'We are concerned about safeguarding the confidentiality of your information stored locally on your mobile device. Please be aware that, although we endeavor provide reasonable security for information we process and maintain, no security system can prevent all potential security breaches (e.g., a zero-day attack targeting mobile Operating System – OS). In order to ensure an optimal security, you shall regularly install any Application’s update available from the mobile application marketplace. We also advise you to regularly check for any Android OS update(s) that could be available and to enable automatic updates.'} />
    )
    Alldata.push(
        <InformationDiv key={'6'} title={'Changes'} desc={`This Privacy Policy may be updated from time to time for any reason. We will notify you of any changes to our Privacy Policy by posting the new Privacy Policy at ${data.yourWeb} and update the "Last updated" date at the top of this Privacy Policy. Please be aware that, although we endeavor provide reasonable security for information we process and maintain, no security system can prevent all potential security breaches (e.g., a zero-day attack targeting mobile Operating System – OS).You are advised to review this Privacy Policy periodically for any changes, as continued use is deemed approval of all changes. Changes to this Privacy Policy are effective when they are posted on this page.`} />
    )
    Alldata.push(
        <InformationDiv key={'7'} title={'Your Consent'} desc={`By using the Application, you only consent to the local processing of your information. At any time, no User Provided Data will be shared, processed and/or stored by third parties. User Provided Data cannot and will never be sold to any other third parties.`} />
    )
    Alldata.push(
        <div key={'8'}>
            <h1 className="text-xl font-bold text-left mb-3">Contact us</h1>
            <p className="mb-3"> If you have any questions regarding privacy while using the Application, or have questions about our practices, please contact us via email at <a className='text-blue-500' href={`mailto:${data.developerEmail}`}>{data.developerEmail}</a></p>
        </div>
    )
    return (
        Alldata
    )
}

export default InformationSection