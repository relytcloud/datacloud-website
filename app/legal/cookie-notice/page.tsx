"use client";
import Link from "next/link";
import { AnchorLink, TextLink } from "@/components/ui/link";

export default function CookieNotice() {
  return (
    <>
      <h1 className="py-12 text-center text-2xl-500 text-white md:py-24 md:text-3xl-700 lg:text-5xl-700">
        Cookie Notice
      </h1>
      <div className="text-base-400">
        <span className="text-white">Last updated: </span>
        October 30, 2024
      </div>
      <div className="py-6 text-base-400">
        To ensure your online experience is as supportive and informative as
        possible, DATA.CLOUD Technology and its affiliates and subsidiaries (
        <span className="text-white">&quot;DATACLOUD&quot;</span>,
        <span className="text-white">&quot;we&quot;</span>,
        <span className="text-white">&quot;our&quot;</span>, or{" "}
        <span className="text-white">&quot;us&quot;</span>) use cookies and
        other similar automated data collection tools to recognize you when you
        visit our websites and applications (the{" "}
        <span className="text-white">&quot;Sites&quot;</span>). This Cookie
        Notice explains what cookies and similar tools are, why we use them, and
        how you can control our use of cookies.
      </div>
      <div className="display-number pb-12">
        <div className="mt-6 pt-6 text-2xl-500 text-white">
          <div>
            <span className="text-white" id="what-are-cookies">
              What are cookies?
            </span>
            <div className="pt-6 text-base-400 text-grey-400">
              Cookies are small pieces of text stored on a user&apos;s computer
              or mobile device by a website owner or third party when the user
              visits a website. Cookies help the website function efficiently
              and improve user experience by providing reporting information,
              remembering user preferences, and enabling third-party
              functionality such as advertising or analytics.
            </div>
            <div className="pt-2 text-base-400 text-grey-400">
              Cookies can be first-party cookies set by the website owner or
              third-party cookies set by third-party servers or domains. We can
              classify cookies into the following four basic types.
            </div>
            <table className="legal-table my-6 w-full text-left">
              <thead>
                <tr className="text-base-500">
                  <th className="w-1/3 p-3">Type</th>
                  <th className="w-1/3 p-3">Description</th>
                  <th className="w-1/3 p-3">If blocked</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="w-1/3 p-3 text-xs-400 md:text-base-400">
                    Essential cookies
                  </td>
                  <td className="w-1/3 p-3 text-xs-400 md:text-base-400">
                    Essential cookies are necessary to ensure that our Sites run
                    correctly. They are typically set in response to actions
                    made by you that request our services and utilize various
                    features offered by our Sites, such as managing your privacy
                    settings, logging in, and filling out forms.
                  </td>
                  <td className="w-1/3 p-3 text-xs-400 md:text-base-400">
                    Part or even all of the services offered by our Sites will
                    become unavailable.
                  </td>
                </tr>
                <tr>
                  <td className="w-1/3 p-3 text-xs-400 md:text-base-400">
                    Performance cookies
                  </td>
                  <td className="w-1/3 p-3 text-xs-400 md:text-base-400">
                    Performance cookies enable us to count visits and traffic
                    sources, leading to better understanding and optimization of
                    our Sites&apos;performance. With insights derived from
                    visitor traffic patterns, we are informed of the popular
                    pages, low-traffic pages, and visitor navigation as they
                    move around the site.
                  </td>
                  <td className="w-1/3 p-3 text-xs-400 md:text-base-400">
                    It will be difficult for us to make personalized solutions
                    to improve your online experience.
                  </td>
                </tr>
                <tr>
                  <td className="w-1/3 p-3 text-xs-400 md:text-base-400">
                    Functional cookies
                  </td>
                  <td className="w-1/3 p-3 text-xs-400 md:text-base-400">
                    Functional cookies are used to enhance the functionality and
                    personalization of our Sites. They may be set by our Sites
                    or third-party providers whose services we have added to our
                    pages.
                  </td>
                  <td className="w-1/3 p-3 text-xs-400 md:text-base-400">
                    Our services may function improperly or possibly cease to
                    function entirely.
                  </td>
                </tr>
                <tr>
                  <td className="w-1/3 p-3 text-xs-400 md:text-base-400">
                    Targeting cookies
                  </td>
                  <td className="w-1/3 p-3 text-xs-400 md:text-base-400">
                    Our advertising partners may set targeting cookies through
                    our Sites. These cookies enable third-party service
                    providers to collect information and build a profile of your
                    interests, which is then used to provide more relevant
                    advertisements on other sites.
                  </td>
                  <td className="w-1/3 p-3 text-xs-400 md:text-base-400">
                    You may experience a reduction in targeted advertising.
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="pb-6 text-base-400 text-grey-400">
              For more information about cookies, please visit{" "}
              <Link
                className="cursor-pointer text-primary-blue hover:underline hover:underline-offset-2"
                href="https://allaboutcookies.org"
                target="_blank"
              >
                https://allaboutcookies.org
              </Link>
              .
            </div>
          </div>
          <div className="mt-6 py-6">
            What are the other tools similar to cookies you use?
            <div className="pt-6 text-base-400 text-grey-400">
              Aside from cookies, we may use other similar tools including web
              beacons (also known as &quot;tracking pixels&quot; or &quot;clear
              GIFs&quot;) and JavaScript. Web beacons are minuscule graphics
              files with a unique identifier that allow us to recognize when
              someone visits our Sites or opens an email. JavaScript is a code
              built into our Sites that triggers when an HTML page with
              JavaScript is requested. JavaScript serves a similar purpose to a
              web beacon, letting us know if you&apos;ve interacted with a
              particular page. These tools enable us to monitor traffic
              patterns, count visits, understand where you came from, enhance
              the performance of our Sites, track navigation patterns and
              feature usage, and gauge the effectiveness of emails and marketing
              campaigns. They typically rely on cookies, and therefore disabling
              cookies may impair their functionality, but we may utilize browser
              or device fingerprinting techniques to identify specific devices
              or browsers for fraud detection, network security, and information
              security purposes, which are unlikely to be affected by declining
              cookies.
            </div>
          </div>
          <div className="mt-6 py-6">
            How can I control cookies?
            <div className="pt-6 text-base-400 text-grey-400">
              You can decide whether to block cookies in your browser. However,
              disabling certain types of cookies may affect your use of our
              Sites. For information about the consequences of blocking each
              type of cookies, please see the table provided in{" "}
              <AnchorLink
                id="what-are-cookies"
              >
                What are cookies?
              </AnchorLink>
              .
            </div>
            <div className="pt-2 text-base-400 text-grey-400">
              Most browsers accept cookies automatically but allow you to
              activate relevant settings to prompt you for acceptance, or to
              reject them altogether, including essential cookies. If you
              activate the settings, you may fail to access part of or even all
              features provided by our Sites.
            </div>
          </div>
          <div className="mt-6 py-6">
            Do you provide targeted advertising?
            <div className="pt-6 text-base-400 text-grey-400">
              We may work with third-party advertising partners that may use
              cookies to serve advertising through our Sites. To stop
              interest-based advertising cookies from these participating
              partners, you can visit{" "}
              <Link
                className="cursor-pointer text-primary-blue hover:underline hover:underline-offset-2"
                href="http://www.aboutads.info/choices"
                target="_blank"
              >
                http://www.aboutads.info/choices
              </Link>{" "}
              or{" "}
              <Link
                className="cursor-pointer text-primary-blue hover:underline hover:underline-offset-2"
                href="http://www.youronlinechoices.com"
                target="_blank"
              >
                http://www.youronlinechoices.com
              </Link>{" "}
              to learn more information on targeted advertising and how to
              opt-out of such cookies.
            </div>
          </div>
          <div className="mt-6 pt-6">
            How often will you update this Notice?
            <div className="pt-6 text-base-400 text-grey-400">
              We may update this Notice occasionally. Each time we change the
              Notice, we will update the &quot;Last updated&quot; date at the
              start of this Notice.
            </div>
          </div>
          <div className="mt-6 pt-6">
            How can I contact you?
            <div className="pt-6 text-base-400 text-grey-400">
              If you have any further questions about our use of cookies and
              other tools, please read{" "}
              <Link
                className="cursor-pointer text-primary-blue hover:underline hover:underline-offset-2"
                href="/legal/privacy-notice"
              >
                Privacy Notice
              </Link>{" "}
              or contact us at{" "}
              <TextLink id="mailto:contact@data.cloud">
                contact@data.cloud
              </TextLink>
              .
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
