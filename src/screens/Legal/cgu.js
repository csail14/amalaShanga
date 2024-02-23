import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import Fond3 from "../../assets/lotus.jpeg";
import { useMediaQuery } from "react-responsive";

const MainContainer = styled.div`
  padding-top: ${(props) => (props.isMobile ? "100px" : "100px")};
  padding-bottom: 40px;
  min-height: 96vh;
  color: white;
`;

const TitleContainer = styled.p`
  color: black;
  font-weight: 700;
  font-size: 32px;
  text-align: center;
`;

const ErrorMessage = styled.p`
  color: red;
  font-weight: bold;
  margin-top: 10px;
`;

const SubTitleContainer = styled.p`
  color: black;
  font-size: 18px;
  text-align: left;
  margin: 20px;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: ${(props) => (props.isMobile ? "10px" : "0 250px")};
  background-color: rgb(255, 255, 255, 0.5);
  color: white;
  border: 0.5px solid white;
  border-radius: 12px;
  padding: 12px;
`;

const CGU = (props) => {
  const isMobile = useMediaQuery({ query: "(max-width: 975px)" });

  return (
    <MainContainer
      isMobile={isMobile}
      style={{
        backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), url(${Fond3})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <InfoContainer>
        <TitleContainer>
          Conditions générales d’utilisation du site Amala Sangha
        </TitleContainer>
        <SubTitleContainer>
          <strong>Article 1 :</strong> Objet Les présentes CGU ou Conditions
          Générales d’Utilisation encadrent juridiquement l’utilisation des
          services du site Amala Sangha (ci-après dénommé « le site »).
          Constituant le contrat entre l’association Amala Sangha,
          l’Utilisateur, l’accès au site doit être précédé de l’acceptation de
          ces CGU. L’accès à cette plateforme signifie l’acceptation des
          présentes CGU.
        </SubTitleContainer>
        <SubTitleContainer>
          <strong>Article 2 : </strong>Mentions légales L’édition du site Amala
          Sangha est assurée par la société Camille Saillard, dont le siège
          social est localisé au 3 rue Gazan, 75014, Paris, France
          Métropolitaine. L’hébergeur du site Amala Sangha est la société OVH.
        </SubTitleContainer>
        <SubTitleContainer>
          <strong>Article 3 : </strong>Accès au site Le site Amala Sangha permet
          d’accéderaux services suivants :{" "}
          <ul>
            <li>Cours de Yoga.</li>
            <li> Meditation.</li>
            <li> Information et inscription stages.</li>
          </ul>{" "}
          Le site est accessible gratuitement depuis n’importe où par tout
          utilisateur disposant d’un accès à Internet. Tous les frais
          nécessaires pour l’accès aux services (matériel informatique,
          connexion Internet…) sont à la charge de l’utilisateur. L’accès aux
          services dédiés aux membres s’effectue à l’aide d’un identifiant et
          d’un mot de passe. Pour des raisons de maintenance ou autres, l’accès
          au site peut être interrompu ou suspendu par l’éditeur sans préavis ni
          justification.
        </SubTitleContainer>
        <SubTitleContainer>
          <strong>Article 4 : </strong>Collecte des données Pour la création du
          compte de l’Utilisateur, la collecte des informations au moment de
          l’inscription sur le site est nécessaire et obligatoire. Conformément
          à la loi n°78-17 du 6 janvier relative à l’informatique, aux fichiers
          et aux libertés, la collecte et le traitement d’informations
          personnelles s’effectuent dans le respect de la vie privée. Suivant la
          loi Informatique et Libertés en date du 6 janvier 1978, articles 39 et
          40, l’Utilisateur dispose du droit d’accéder, de rectifier, de
          supprimer et d’opposer ses données personnelles. L’exercice de ce
          droit s’effectue par : Le formulaire de contact ; Son espace client.
        </SubTitleContainer>
        <SubTitleContainer>
          <strong>Article 5 : </strong>Propriété intellectuelle Les marques,
          logos ainsi que les contenus du site Amala Sangha (illustrations
          graphiques, textes…) sont protégés par le Code de la propriété
          intellectuelle et par le droit d’auteur. La reproduction et la copie
          des contenus par l’Utilisateur requièrent une autorisation préalable
          du site. Dans ce cas, toute utilisation à des usages commerciaux ou à
          des fins publicitaires est proscrite.
        </SubTitleContainer>
        <SubTitleContainer>
          <strong>Article 6 : </strong> Responsabilité Bien que les informations
          publiées sur le site soient réputées fiables, le site se réserve la
          faculté d’une non-garantie de la fiabilité des sources. Les
          informations diffusées sur le site Amala Sangha sont présentées à
          titre purement informatif et sont sans valeur contractuelle. En dépit
          des mises à jour régulières, la responsabilité du site ne peut être
          engagée en cas de modification des dispositions administratives et
          juridiques apparaissant après la publication. Il en est de même pour
          l’utilisation et l’interprétation des informations communiquées sur la
          plateforme. Le site décline toute responsabilité concernant les
          éventuels virus pouvant infecter le matériel informatique de
          l’Utilisateur après l’utilisation ou l’accès à ce site. Le site ne
          peut être tenu pour responsable en cas de force majeure ou du fait
          imprévisible et insurmontable d’un tiers. La garantie totale de la
          sécurité et la confidentialité des données n’est pas assurée par le
          site. Cependant, le site s’engage à mettre en œuvre toutes les
          méthodes requises pour le faire au mieux.
        </SubTitleContainer>
        <SubTitleContainer>
          <strong>Article 7 : </strong> Liens hypertextes Le site peut être
          constitué de liens hypertextes. En cliquant sur ces derniers,
          l’Utilisateur sortira de la plateforme. Cette dernière n’a pas de
          contrôle et ne peut pas être tenue responsable du contenu des pages
          web relatives à ces liens.
        </SubTitleContainer>
        <SubTitleContainer>
          <strong>Article 8 : </strong> Cookies Lors des visites sur le site,
          l’installation automatique d’un cookie sur le logiciel de navigation
          de l’Utilisateur peut survenir. Les cookies correspondent à de petits
          fichiers déposés temporairement sur le disque dur de l’ordinateur de
          l’Utilisateur. Ces cookies sont nécessaires pour assurer
          l’accessibilité et la navigation sur le site. Ces fichiers ne
          comportent pas d’informations personnelles et ne peuvent pas être
          utilisés pour l’identification d’une personne. L’information présente
          dans les cookies est utilisée pour améliorer les performances de
          navigation sur le site amalasangha.fr. En naviguant sur le site,
          l’Utilisateur accepte les cookies. Leur désactivation peut s’effectuer
          via les paramètres du logiciel de navigation.
        </SubTitleContainer>
        <SubTitleContainer>
          <strong>Article 9 : </strong> Durée du contrat Le présent contrat est
          valable pour une durée indéterminée. Le début de l’utilisation des
          services du site marque l’application du contrat à l’égard de
          l’Utilisateur.
        </SubTitleContainer>
        <SubTitleContainer>
          <strong>Article 10 : </strong> Droit applicable et juridiction
          compétente Le présent contrat est soumis à la législation française.
          L’absence de résolution à l’amiable des cas de litige entre les
          parties implique le recours aux tribunaux français compétents pour
          régler le contentieux.
        </SubTitleContainer>
      </InfoContainer>
    </MainContainer>
  );
};

const mapDispatchToProps = {};

const mapStateToProps = (store) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(CGU);
