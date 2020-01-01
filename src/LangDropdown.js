import React, { useContext } from "react";
import { FormattedMessage } from "react-intl";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import "./LangDropdown.css";
import { LangContext } from "./Store";

const Style = {
  textDecoration: "none",
  fontSize: "14px",
  color: "#747474"
};

function Drop() {
  const [lang, setLang] = useContext(LangContext);

  return (
    <UncontrolledDropdown>
      <DropdownToggle nav caret style={Style}>
        <FormattedMessage id="Langs" />
      </DropdownToggle>

      <DropdownMenu right>
        <DropdownItem
          className={
            lang
              ? lang === "de"
                ? "stripe Selected"
                : "stripe"
              : "stripe ...."
          }
          onClick={() => {
            setLang("de");
          }}
        >
          Deutsch
        </DropdownItem>


        <DropdownItem
          className={
            lang
              ? lang === "tr"
                ? "stripe Selected"
                : "stripe"
              : "stripe ...."
          }
          onClick={() => {
            setLang("tr");
          }}
        >
          Türkçe
        </DropdownItem>


        <DropdownItem
          className={
            lang
              ? lang === "ar"
                ? "stripe Selected"
                : "stripe"
              : "stripe ...."
          }
          onClick={() => {
            setLang("ar");
          }}
        >
          عربى
        </DropdownItem>



        <DropdownItem
          className={
            lang
              ? lang === "en"
                ? "stripe Selected"
                : "stripe"
              : "stripe ...."
          }
          onClick={() => {
            setLang("en");
          }}
        >
          English
        </DropdownItem>

        <DropdownItem
          className={
            lang
              ? lang === "bs"
                ? "stripe Selected"
                : "stripe"
              : "stripe ...."
          }
          onClick={() => {
            setLang("bs");
          }}
        >
          Bosanski
        </DropdownItem>

        <DropdownItem
          className={
            lang
              ? lang === "sq"
                ? "stripe Selected"
                : "stripe"
              : "stripe ...."
          }
          onClick={() => {
            setLang("sq");
          }}
        >
          Gjuhë Shqipe
        </DropdownItem>

        <DropdownItem
          className={
            lang
              ? lang === "ur"
                ? "stripe Selected"
                : "stripe"
              : "stripe ...."
          }
          onClick={() => {
            setLang("ur");
          }}
        >
          اردو{" "}
        </DropdownItem>


        <DropdownItem
          className={
            lang
              ? lang === "fa"
                ? "stripe Selected"
                : "stripe"
              : "stripe ...."
          }
          onClick={() => {
            setLang("fa");
          }}
        >
          فارسی{" "}
        </DropdownItem>


        <DropdownItem
         className={
          lang
            ? lang === "ru"
              ? "stripe Selected"
              : "stripe"
            : "stripe ...."
        }
          onClick={() => {
            setLang("ru");
          }}
        >
          Русский
        </DropdownItem>

        <DropdownItem
          className={
            lang
              ? lang === "bg"
                ? "stripe Selected"
                : "stripe"
              : "stripe ...."
          }
          onClick={() => {
            setLang("bg");
          }}
        >
          български
        </DropdownItem>

        <DropdownItem
          className={
            lang
              ? lang === "fr"
                ? "stripe Selected"
                : "stripe"
              : "stripe ...."
          }
          onClick={() => {
            setLang("fr");
          }}
        >
          Français
        </DropdownItem>



        <DropdownItem
         className={
          lang
            ? lang === "nl"
              ? "stripe Selected"
              : "stripe"
            : "stripe ...."
        }
          onClick={() => {
            setLang("nl");
          }}
        >
          Nederlands
        </DropdownItem>


        <DropdownItem
          className={
            lang
              ? lang === "it"
                ? "stripe Selected"
                : "stripe"
              : "stripe ...."
          }
          onClick={() => {
            setLang("it");
          }}
        >
          Italiano
        </DropdownItem>

        <DropdownItem
          className={
            lang
              ? lang === "es"
                ? "stripe Selected"
                : "stripe"
              : "stripe ...."
          }
          onClick={() => {
            setLang("es");
          }}
        >
          Español
        </DropdownItem>

        <DropdownItem
          className={
            lang
              ? lang === "pt"
                ? "stripe Selected"
                : "stripe"
              : "stripe ...."
          }
          onClick={() => {
            setLang("pt");
          }}
        >
          Português
        </DropdownItem>

        <DropdownItem
          className={
            lang
              ? lang === "da"
                ? "stripe Selected"
                : "stripe"
              : "stripe ...."
          }
          onClick={() => {
            setLang("da");
          }}
        >
          Dansk
        </DropdownItem>


        <DropdownItem
          className={
            lang
              ? lang === "sv"
                ? "stripe Selected"
                : "stripe"
              : "stripe ...."
          }
          onClick={() => {
            setLang("sv");
          }}
        >
          Svenska
        </DropdownItem>

        <DropdownItem
         className={
          lang
            ? lang === "no"
              ? "stripe Selected"
              : "stripe"
            : "stripe ...."
        }
          onClick={() => {
            setLang("no");
          }}
        >
          Norsk
        </DropdownItem>

    <DropdownItem
         className={
          lang
            ? lang === "fi"
              ? "stripe Selected"
              : "stripe"
            : "stripe ...."
        }
          onClick={() => {
            setLang("fi");
          }}
        >
          Suomi
        </DropdownItem>

        <DropdownItem
          className={
            lang
              ? lang === "id"
                ? "stripe Selected"
                : "stripe"
              : "stripe ...."
          }
          onClick={() => {
            setLang("id");
          }}
        >
          Bahasa Indonesia
        </DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>
  );
}
export default Drop;
