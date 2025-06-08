import { render } from '@testing-library/angular';
import { UiCardComponent } from './ui-card.component';

it('should render title', async () => {
  const { getByText } = await render(UiCardComponent, {
    componentProperties: { title: 'Test Card' }
  });
  expect(getByText('Test Card')).toBeTruthy();
});
