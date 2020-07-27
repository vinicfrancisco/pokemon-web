import React from 'react';
import { FiPlus, FiX } from 'react-icons/fi';

import Field from '~/components/Field';
import Input from '~/components/Input';
import Label from '~/components/Label';

import { Header, AttackContainer } from './styles';

export default function SpecialAttacks({
  specialAttacks,
  handleAddSpecialAttack,
  handleRemoveSpecialAttack,
  handleChangeSpecialAttack,
}) {
  return (
    <Field>
      <Header>
        <Label>Ataques Especiais</Label>
        <button
          data-testid="add-special-attack"
          type="button"
          onClick={handleAddSpecialAttack}
        >
          <FiPlus size={20} />
        </button>
      </Header>

      {specialAttacks.map((attack, index) => (
        <AttackContainer key={attack.id}>
          <button
            data-testid={`remove-special-attack-${index}`}
            type="button"
            onClick={() => handleRemoveSpecialAttack(attack.id)}
          >
            <FiX size={15} />
          </button>

          <div>
            <Field>
              <Label>Nome:</Label>
              <Input
                blackBorder
                data-testid={`special-attack-name-${index}`}
                name={`special_attack_name-${attack.id}`}
                placeholder="Ex: Tackle"
                value={attack.name}
                onChange={(e) =>
                  handleChangeSpecialAttack(attack.id, 'name', e.target.value)
                }
              />
            </Field>

            <Field>
              <Label>Tipo:</Label>
              <Input
                blackBorder
                data-testid={`special-attack-type-${index}`}
                name={`special_attack_type-${attack.id}`}
                placeholder="Ex: Fire"
                value={attack.type}
                onChange={(e) =>
                  handleChangeSpecialAttack(attack.id, 'type', e.target.value)
                }
              />
            </Field>

            <Field>
              <Label>Dano:</Label>
              <Input
                blackBorder
                data-testid={`special-attack-damage-${index}`}
                name={`special_attack_damage-${attack.id}`}
                placeholder="Ex: 50"
                value={attack.damage}
                onChange={(e) =>
                  handleChangeSpecialAttack(attack.id, 'damage', e.target.value)
                }
              />
            </Field>
          </div>
        </AttackContainer>
      ))}
    </Field>
  );
}
