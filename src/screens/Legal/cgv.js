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

const CGV = (props) => {
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
          Conditions générales de vente Amala Sangha
        </TitleContainer>
        <SubTitleContainer>
          Les présentes Conditions Générales de Vente (CGV) s’appliquent, sans
          restriction ni réserve à l’ensemble des ventes conclues par
          l’association “Amala Sangha” auprès d’acheteurs non professionnels
          dénommés “Adhérents” au sein des présentes CGV. Dans le cadre du site
          web, l’association propose à la vente des cours de yoga ou
          l’inscription à des stages. Les présentes CGV précisent notamment les
          conditions d’achat immédiat, de paiement des cours ou stages
          commandés. Les présentes CGV s’appliquent à l’exclusion de toutes
          autres conditions. Ces CGV sont systématiquement communiquées à tout
          Adhérents préalablement à l’achat immédiat et prévaudront, le cas
          échéant, sur toute autre version ou tout autre document
          contradictoire. L’ Adhérents déclare avoir pris connaissance des
          présentes CGV et les avoir acceptées avant son achat immédiat ou la
          passation de sa commande, étant précisé que le paiement emporte leur
          acceptation. En effectuant leur commande, les Adhérents dé
        </SubTitleContainer>
        <SubTitleContainer>
          <strong>Article 1 : </strong>Conditions Générales Les cours ne sont ni
          repris, ni échangés sauf erreur. Il appartient aux Adhérents de
          vérifier l’exactitude de la commande et de signaler immédiatement
          toute erreur. L’association n’a pas vocation à vendre les cours à des
          professionnels, mais uniquement à des particuliers, pour leurs besoins
          personnels. Les Adhérents sont avertis que des clips vidéo sont
          tournés et que des photos sont prises pour les besoins de la
          communication de l’association pendant les stages, leur image est donc
          susceptible d’y figurer. Par l’achat des cours et la participation aux
          stages s’en suivant, les Adhérents autorisent donc l’exploitation de
          leur image. En conséquence, ils ne pourront par la suite reprocher
          cette exploitation à l’association ni se servir de cette circonstance
          pour invoquer un quelconque préjudice ouvrant droit à indemnité.
        </SubTitleContainer>
        <SubTitleContainer>
          <strong>Article 2 : </strong>Tarifs Les prix des cours et stages sont
          indiqués en euro Toutes Taxes Comprises incluant les frais de
          traitement de la réservation
        </SubTitleContainer>
        <SubTitleContainer>
          <strong>Article 3 : </strong> Réservation en ligne Le mode de paiement
          immédiat est le paiement par CB (Carte Bancaire). La réservation de
          cours s’effectue en temps réel. Lors de votre réservation, la page
          “mon panier” est un récapitulatif de ce que vous êtes en passe de
          commander. Cette page ne vous informe que sur la commande en cours.
          Cette page ne constitue pas une preuve de réservation ferme. La
          commande n’est définitive qu’une fois le paiement par carte bancaire.
          L’association ne peut être tenu responsable des erreurs commises par
          l’acheteur lors de sa commande (coordonnées, e-mail, n° de carte
          erroné). Le paiement par carte bancaire correspond à un achat ferme et
          définitif dans la mesure où votre paiement est accepté par votre
          banque. Le système de règlement par carte bancaire est doté d’un
          protocole de sécurisation qui vous permet d’effectuer vos transactions
          en toute sécurité. Votre commande sera alors consultable dans l’espace
          « mon compte ».
        </SubTitleContainer>
        <SubTitleContainer>
          <strong>Article 4 : </strong>Modification ou annulation d’une commande
          Dans la rubrique “mon compte”, le client qui a déjà fait des achats et
          dont le paiement a été effectué par carte bancaire peut ajouter une
          nouvelle commande. Cependant, il ne peut en aucun cas modifier ou
          supprimer de lui-même les produits d’une commande réglée. Dans ce cas,
          contactez l’association à l’adresse frederique@amalasangha.fr ou
          faites une nouvelle commande pour ajouter des aux activités désirées.
          Aucun remboursement ne sera effectué une fois l’achat validé.
        </SubTitleContainer>
        <SubTitleContainer>
          <strong>Article 5 : </strong>CNIL Conformément à la loi informatique
          et liberté du 6 janvier 1978, vous disposez d’un droit d’accès, de
          rectification et d’opposition aux données personnelles vous
          concernant. Ce droit peut être exercé en nous écrivant à l’adresse
          suivante en indiquant vos nom, prénom et adresse :
          frederique@amalasangha.fr.
        </SubTitleContainer>
        <SubTitleContainer>
          <strong>Article 6 : </strong> Droit applicable Les présentes
          conditions de vente sont soumises au droit français.
        </SubTitleContainer>
        <SubTitleContainer>
          <strong>Article 7 : </strong>Règlement des différends Tout litige
          relatif à la validité, l’interprétation, l’exécution, la résiliation
          des présentes, relève des tribunaux français dans les conditions de
          droit commun. En présence d’un conflit avec l’association, outre le
          recours juridictionnel, l’ Adhérant peut recourir à une médiation
          conventionnelle (notamment auprès de la Commission de la médiation de
          la consommation ou auprès des instances de médiation sectorielles) ou
          à tout mode alternatif de règlement des différends.
        </SubTitleContainer>
      </InfoContainer>
    </MainContainer>
  );
};

const mapDispatchToProps = {};

const mapStateToProps = (store) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(CGV);
