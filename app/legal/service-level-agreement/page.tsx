export default function ServiceLevelAgreement() {
  return (
    <>
      <h1 className="py-12 text-center text-2xl-500 text-white md:py-24 md:text-3xl-700 lg:text-5xl-700">
        Service Level Agreement
      </h1>
      <div className="text-base-400">
        <span className="text-white">Last updated: </span>
        September 20, 2024
      </div>
      <div className="py-6 text-base-400">
        This DATACLOUD Service Level Agreement (
        <span className="text-white">&quot;SLA&quot;</span>) explains the
        service level policy for DATACLOUD and applies separately to each cloud
        account and DW user that uses DATACLOUD. This SLA defines the service
        level terms and conditions for DATACLOUD customers (
        <span className="text-white">&quot;Customer&quot;</span>,
        <span className="text-white"> &quot;you&quot;</span>, or
        <span className="text-white"> &quot;your&quot;</span>) whose agreement
        governing the use of DATACLOUD (
        <span className="text-white">&quot;Agreement&quot;</span>) or Order Form
        references this SLA. However, DATACLOUD reserves the right to offer more
        limited support for free trials and evaluations of the service at its
        discretion. DATACLOUD retains the right to update this SLA at any time.
      </div>
      <div className="display-number pb-12">
        <ol
          className="mt-6 pt-6 text-2xl-500 text-white md:text-3xl-500"
          id="our-service"
        >
          <li>
            Definitions
            <div className="py-6 text-base-400 text-grey-400">
              Unless otherwise specified, the key terms (with the first
              character capitalized) used in the SLA are defined as follows:
              <ul>
                <li className="pt-6">
                  <span className="text-white">
                    &quot;Service Level&quot;&nbsp;
                  </span>
                  is defined as a Monthly Uptime Percentage of 99.9%.
                </li>
                <li>
                  <span className="text-white">
                    &quot;Service Level Credits&quot;&nbsp;
                  </span>
                  : means the number of DATACLOUD Credits you will receive in
                  the event of a Service Level Failure for a given Monthly
                  Availability Percentage and Error Rate Threshold, as indicated
                  in Table 4.
                </li>
                <li>
                  <span className="text-white">
                    &quot;DATACLOUD Credits of the Month&quot;&nbsp;
                  </span>
                  is defined as your actual DATACLOUD Credit (as defined in the
                  DATACLOUD Service Consumption Table) consumption in the
                  calendar month for which the Service Level Credits are to be
                  calculated.
                </li>
                <li>
                  <span className="text-white">
                    &quot;Calendar Minutes&quot;&nbsp;
                  </span>
                  means the total number of minutes during which a given DW
                  service unit receives at least one request in a calendar
                  month.
                </li>
                <li>
                  <span className="text-white">
                    &quot;Monthly Uptime Percentage&quot;&nbsp;
                  </span>
                  means the difference between Service Downtime and the Total
                  Service Time, divided by Calendar Minutes, and multiplied by
                  one hundred (100).
                </li>
                <li>
                  <span className="text-white">
                    &quot;Service Unavailable&quot;&nbsp;
                  </span>
                  : If all requests in a minute forwarded to a DW service unit
                  fail to be processed, the DW service unit will be regarded as
                  unavailable in this minute.
                </li>
                <li>
                  <span className="text-white">
                    &quot;Service Downtime&quot;&nbsp;
                  </span>
                  means the total accumulated Service Unavailable minutes during
                  a calendar month for a given DW service unit.
                </li>
              </ul>
            </div>
          </li>
          <li className="mt-6 py-6">
            Service Level Credits
            <div className="pt-6 text-base-400 text-grey-400">
              If the Monthly Uptime Percentage of a DW service unit deployed in
              your region is smaller than 99.9%, you shall receive Service Level
              Credits in the region in the immediately succeeding calendar
              month.
            </div>
            <div className="pt-2 text-base-400 text-grey-400">
              How to calculate Monthly Uptime Percentage:
            </div>
            <div className="pt-2 text-base-400 text-grey-400">
              Monthly Uptime Percentage = (Calendar Minutes - Service
              Downtime)/Calendar Minute x 100%
            </div>
            <div className="pt-2 text-base-400 text-grey-400">
              The following table describes how to calculate the Service Level
              Credits based on the Monthly Uptime Percentage.
            </div>
            <table className="legal-table my-6 w-full text-left">
              <thead>
                <tr className="text-base-500">
                  <th className="w-1/3 p-3">Monthly Availability Percentage</th>
                  <th className="w-1/3 p-3">Service Level Credits</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="w-1/3 p-3 text-xs-400 md:text-base-400">
                    Less than 99.9% but greater than or equal to 99.0%
                  </td>
                  <td className="w-1/3 p-3 text-xs-400 md:text-base-400">
                    10% x DATACLOUD Credits of the Month
                  </td>
                </tr>
                <tr>
                  <td className="w-1/3 p-3 text-xs-400 md:text-base-400">
                    Less than 99.0% but greater than or equal to 95.0%
                  </td>
                  <td className="w-1/3 p-3 text-xs-400 md:text-base-400">
                    25% x DATACLOUD Credits of the Month
                  </td>
                </tr>
                <tr>
                  <td className="w-1/3 p-3 text-xs-400 md:text-base-400">
                    Less than 95.0%
                  </td>
                  <td className="w-1/3 p-3 text-xs-400 md:text-base-400">
                    100% x DATACLOUD Credits of the Month
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="rounded-md border border-[#e0a285] bg-[#F2821829] px-6 py-4 text-[#e0a285] text-base-400">
              The bonus balance or vouchers cannot be cashed, no invoice will be
              issued, and you cannot transfer, gift, or otherwise dispose of the
              vouchers.
            </div>
          </li>
          <li className="mt-6 py-6">
            Exclusions
            <div className="pt-6 text-base-400 text-grey-400">
              DATACLOUD will have no liability for any failure to meet the
              Service Level to the extent arising from:
              <ul>
                <li className="pt-6">
                  DATACLOUD will conduct system maintenance, which may include,
                  but is not limited to, cutover, repair, upgrades, and drills,
                  after providing prior notice to you;
                </li>
                <li>
                  Any failures or adjustments to networks or devices not under
                  DATACLOUD&apos;s ownership;
                </li>
                <li>
                  Your applications or data may suffer breaches due to hacker
                  attacks;
                </li>
                <li>
                  You might experience the loss or leakage of data, credentials,
                  passwords, etc., stemming from inadequate maintenance or
                  confidentiality measures on your part;
                </li>
                <li>
                  Incidents arising from your negligence or actions that
                  you&apos;ve authorized;
                </li>
                <li>
                  Disruptions to service resulting from not adhering to the
                  usage guidelines or recommendations DATACLOUD has provided;
                </li>
                <li>
                  The unavailability of services due to software or drivers
                  you&apos;ve installed, or from configuration errors;
                </li>
                <li>
                  The suspension or termination of services driven by legal or
                  regulatory requirements, demands from supervisory authorities,
                  or in compliance with the terms of relevant service agreements
                  and the policies they reference;
                </li>
                <li>
                  Service suspension or termination as a consequence of your
                  failure to make payments;
                </li>
                <li>
                  Unavailability resulting from your decision to engage in
                  frequent data reading and modification activities, despite
                  opting for inadequate storage and computing resources,
                  excessive CPU usage, high memory load, or maxed-out disk space
                  (it&apos;s advisable to maintain these metrics below 60%)
                  without activating system automatic monitoring or leveraging
                  service elasticity;
                </li>
                <li>
                  Decreased response times, system freezes, or exceeding
                  instance resource limits (such as CPU, memory, or IOPS) during
                  scenarios of extreme performance pressure faced by DWSU;
                </li>
                <li>
                  Time spent during service or component restarts or through
                  forced restart operations undertaken by DWSU;
                </li>
                <li>
                  Service unavailability due to dependencies on local disks and
                  their data for startup, which are erased when local disks
                  fail;
                </li>
                <li>
                  Unavailability stemming from acts of God or unforeseen events;
                </li>
                <li>
                  Other factors not related to DATACLOUD, leading to the
                  unavailability of DATACLOUD-provided services.
                </li>
              </ul>
            </div>
          </li>
          <li className="mt-6 py-6">
            Claim submission
            <div className="pt-6 text-base-400 text-grey-400">
              You are eligible to submit compensation claims for any DATACLOUD
              services that failed to meet the required availability standards
              starting from the 5th business day of each month for the previous
              month&apos;s services.
            </div>
            <div className="pt-2 text-base-400 text-grey-400">
              These claims must be submitted within 2 months from the end of the
              month in which the service availability did not meet expectations.
              Any claims filed after this 2-month window will not be accepted.
            </div>
          </li>
          <li className="mt-6 pt-6">
            Changes to this Agreement
            <div className="pt-6 text-base-400 text-grey-400">
              DATACLOUD reserves the right to modify the terms of this Service
              Level Agreement (SLA). In the event of any changes to the SLA
              terms, DATACLOUD will inform you 30 days prior through website
              announcements, SMS notifications, or email communications. Should
              you not agree with the modifications to the SLA, you are entitled
              to cease using the DATACLOUD services. Your continued use of DATA
              CLOUD services will be considered as your acceptance of the
              revised SLA.
            </div>
          </li>
        </ol>
      </div>
    </>
  );
}
