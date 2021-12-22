import css from 'styled-jsx/css';

/*language=SCSS*/
const staticStyles = css`
  @import 'src/_mixins/vars';
  @import 'src/_mixins/screen-size';

  .TableButtonsWrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    max-width: 200px;
    flex: 2;
    @include respond-to(xl) {
      max-width: 160px;
    }
    @include respond-to(lg) {
      max-width: 180px;
    }
    @include respond-to(md) {
      max-width: 160px;
    }

    &__onlyOne {
      justify-content: flex-end;
      max-width: 100px;
      @include respond-to(xl) {
        max-width: 80px;
      }
      @include respond-to(lg) {
        max-width: 90px;
      }
      @include respond-to(md) {
        max-width: 80px;
      }
    }
  }
`;

export default staticStyles;
