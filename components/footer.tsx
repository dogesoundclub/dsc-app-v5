import { ExternalLink } from 'react-external-link';
import Link from 'next/link';

export default function Footer() {
    const TEXT_TERM = "TERM";
    const TEXT_OLD_VERSION = "--> GO TO OLD VERSION";

    return (
        <>
            <div>
            <div className="footerLineMain">
          <div className="footerLineBranch1">
                <div className="footerLineBranchAttached1">
                  <Link
                      href="/Term"
                      style={{ textDecoration: "none", color: "#636363" }}
                    >
                      {TEXT_TERM}
                    </Link>
                </div>
                  </div>
          <div className="footerLineBranch2">
            <ExternalLink href="https://opensea.io/collection/dogesoundclub-mates"><div className ="footerLineBranchAttached2"></div></ExternalLink>
          </div>
          <div className="footerLineBranch3">
            <ExternalLink href="https://discord.gg/dogesoundclub"><div className ="footerLineBranchAttached3"></div></ExternalLink>
          </div>
          <div className="footerLineBranch4">
            <ExternalLink href="https://github.com/dogesoundclub/fiction-dogesoundclub"><div className="footerLineBranchAttached4"></div></ExternalLink>
          </div>
          <div className="footerLineBranch5">
            <ExternalLink href="https://twitter.com/dogesoundclub"><div className="footerLineBranchAttached5"></div></ExternalLink>
          </div>
          <div className="footerLineBranch6">
            <ExternalLink href="https://www.youtube.com/@dogesoundclub_kr"><div className="footerLineBranchAttached6"></div></ExternalLink>
          </div>
          <div className="footerLineBranch7">
            <ExternalLink href="https://t.me/dogesoundclub"><div className="footerLineBranchAttached7"></div></ExternalLink>
          </div>
          <div className="footerLineBranch8">
            <ExternalLink href="https://www.instagram.com/dogesoundclub/"><div className="footerLineBranchAttached8"></div></ExternalLink>
          </div>
        <div className="footerLineBranch9">@2023 DSC LABEL inc.</div>
        <div className="footerLineBranch10">
          <a  style={{ textDecoration: "none", color: "#ffffff" }} 
              href='https://v3.dogesound.club'>{TEXT_OLD_VERSION}</a>
        </div>
      </div>




            </div>
        </>
    )
}