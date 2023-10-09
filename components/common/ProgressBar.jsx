import PropTypes from 'prop-types';
import React, { useMemo } from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { useRecoilValue } from 'recoil';
import { onForeigner } from 'recoil/common/Foreigner';
import styled from 'styled-components/native';

const ProgressBar = ({ target, totalStep, currentStep, onPress }) => {
  const isForeigner = useRecoilValue(onForeigner);

  const barArray = useMemo(
    () => target.map((item, index) => ({ step: index, label: item.label, labelEng: item.labelEng, value: item.value })),
    [target],
  );

  const barItemWidth = useMemo(() => wp(12), []);

  return (
    <Container>
      <LabelWrapper width={barItemWidth * (totalStep - 1)}>
        {barArray.map((item, index) => (
          <LabelTouchWrapper
            key={item.step}
            onPress={() => onPress(item.value, index)}
            left={barItemWidth * index - wp(4) / 2}
          >
            {isForeigner ? <Label>{item.labelEng}</Label> : <Label>{item.label}</Label>}
          </LabelTouchWrapper>
        ))}
      </LabelWrapper>
      <BarWrapper>
        <Circle posX={barItemWidth * currentStep - wp(4) / 2} />
        {barArray.slice(1).map((item, index) => (
          <Bar
            width={barItemWidth}
            key={index}
            isFirst={index === 0}
            isLast={barArray.length - 2 === index}
            highlight={index < currentStep}
          />
        ))}
      </BarWrapper>
    </Container>
  );
};

ProgressBar.propTypes = {
  target: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    }),
  ),
  totalStep: PropTypes.number,
  currentStep: PropTypes.number,
  onPress: PropTypes.func,
};

const Container = styled.View`
  width: 100%;
`;

const BarWrapper = styled.View`
  width: 100%;
  z-index: 3;
  flex-direction: row;
  align-items: center;
`;

const Bar = styled.View`
  width: ${({ width }) => width}px;
  height: ${hp(2)}px;

  border: 1.5px solid #675d50;
  ${({ highlight }) => highlight && `background-color: #CDDCCC`};
  border-radius: ${({ isFirst, isLast }) =>
    isFirst ? `${wp(4)}px 0px 0px ${wp(4)}px` : isLast ? `0px ${wp(4)}px ${wp(4)}px 0px` : '0px'};
`;

const LabelWrapper = styled.View`
  width: ${({ width }) => width}px;
  height: ${hp(2)}px;
  z-index: 10;

  margin-bottom: ${hp(0.625)}px;
  flex-direction: row;
  justify-content: space-between;
`;

const LabelTouchWrapper = styled.TouchableOpacity`
  position: absolute;
  height: ${hp(6)}px;

  z-index: 0;
  left: ${({ left }) => left}px;
`;
const Circle = styled.View`
  z-index: 1;
  position: absolute;
  left: ${({ posX }) => posX}px;

  width: ${wp(4)}px;
  height: ${wp(4)}px;

  border-radius: ${wp(4) / 2}px;
  background-color: ${({ theme }) => theme.colors.lavenderMist};
`;

const Label = styled.Text`
  width: ${wp(4)}px;
  font-size: ${RFValue(8)}px;
  text-align: center;
`;

export default ProgressBar;
