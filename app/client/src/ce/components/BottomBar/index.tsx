import React from "react";
import styled from "styled-components";
import QuickGitActions from "pages/Editor/gitSync/QuickGitActions";
import { Layers } from "constants/Layers";
import { DebuggerTrigger } from "components/editorComponents/Debugger";
import HelpButton from "pages/Editor/HelpButton";
import ManualUpgrades from "./ManualUpgrades";
import PaneCountSwitcher from "pages/common/PaneCountSwitcher";
import { useSelector } from "react-redux";
import { isMultiPaneActive } from "selectors/multiPaneSelectors";
import { Button } from "design-system";

const Container = styled.div`
  width: 100%;
  height: ${(props) => props.theme.bottomBarHeight};
  display: flex;
  position: fixed;
  justify-content: space-between;
  background-color: ${(props) => props.theme.colors.editorBottomBar.background};
  z-index: ${Layers.bottomBar};
  border-top: solid 1px var(--ads-v2-color-border);
  padding-left: ${(props) => props.theme.spaces[11]}px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export default function BottomBar(props: { className?: string }) {
  const isMultiPane = useSelector(isMultiPaneActive);
  return (
    <Container className={props.className ?? ""}>
      <QuickGitActions />
      <Wrapper>
        <ManualUpgrades showTooltip>
          <Button
            className="t--upgrade"
            isIconButton
            kind="tertiary"
            size="md"
            startIcon="upgrade"
          />
        </ManualUpgrades>
        <DebuggerTrigger />
        <HelpButton />
        {isMultiPane && <PaneCountSwitcher />}
      </Wrapper>
    </Container>
  );
}
