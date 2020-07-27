import React from 'react';
import { FiPlus, FiX } from 'react-icons/fi';

import Field from '../../../../components/Field';
import Input from '../../../../components/Input';
import Label from '../../../../components/Label';
import { Header, AttackContainer } from './styles';

export default function FastAttacks({
  fastAttacks,
  handleAddFastAttack,
  handleRemoveFastAttack,
  handleChangeFastAttack,
}) {
  return (
    <Field>
      <Header>
        <Label>Ataques Rápidos</Label>

        <button
          data-testid="add-fast-attack"
          type="button"
          onClick={handleAddFastAttack}
        >
          <FiPlus size={20} />
        </button>
      </Header>

      {fastAttacks.map((attack, index) => (
        <AttackContainer key={attack.id}>
          <button
            data-testid={`remove-fast-attack-${index}`}
            type="button"
            onClick={() => handleRemoveFastAttack(attack.id)}
          >
            <FiX size={15} />
          </button>

          <div>
            <Field>
              <Label>Nome:</Label>
              <Input
                blackBorder
                data-testid={`fast-attack-name-${index}`}
                name={`attack_name-${attack.id}`}
                placeholder="Ex: Tackle"
                value={attack.name}
                onChange={(e) =>
                  handleChangeFastAttack(attack.id, 'name', e.target.value)
                }
              />
            </Field>

            <Field>
              <Label>Tipo:</Label>
              <Input
                blackBorder
                data-testid={`fast-attack-type-${index}`}
                name={`attack_type-${attack.id}`}
                placeholder="Ex: Fire"
                value={attack.type}
                onChange={(e) =>
                  handleChangeFastAttack(attack.id, 'type', e.target.value)
                }
              />
            </Field>

            <Field>
              <Label>Dano:</Label>
              <Input
                blackBorder
                data-testid={`fast-attack-damage-${index}`}
                name={`attack_damage-${attack.id}`}
                placeholder="Ex: 50"
                value={attack.damage}
                onChange={(e) =>
                  handleChangeFastAttack(attack.id, 'damage', e.target.value)
                }
              />
            </Field>
          </div>
        </AttackContainer>
      ))}
    </Field>
  );
}
