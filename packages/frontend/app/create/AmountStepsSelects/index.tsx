"use client";

import { ChangeEvent } from "react";
import { Select, SelectItem } from "@nextui-org/select";
import "./index.css";

interface Props {
  amountSteps: string;
  handleStepMonth_1: (value: ChangeEvent<HTMLSelectElement>) => void;
  handleStepMonth_2: (value: ChangeEvent<HTMLSelectElement>) => void;
  handleStepMonth_3: (value: ChangeEvent<HTMLSelectElement>) => void;
  handleStepMonth_4: (value: ChangeEvent<HTMLSelectElement>) => void;
  handleStepMonth_5: (value: ChangeEvent<HTMLSelectElement>) => void;
  handleStepMonth_6: (value: ChangeEvent<HTMLSelectElement>) => void;
}

export function AmountStepsSelects({
  amountSteps,
  handleStepMonth_1,
  handleStepMonth_2,
  handleStepMonth_3,
  handleStepMonth_4,
  handleStepMonth_5,
  handleStepMonth_6,
}: Props) {
  return (
    <>
      {amountSteps === "4" && (
        <>
          <div>
            <Select
              onChange={handleStepMonth_1}
              variant="bordered"
              label="Months Seed"
              className="w-[187px] text-[#1d9fab] mb-3"
              radius="lg"
              size="sm"
            >
              {["1", "2", "3"].map((option) => (
                <SelectItem
                  key={option}
                  value={option}
                  className="item"
                >
                  {option}
                </SelectItem>
              ))}
            </Select>
          </div>

          <div>
            <Select
              onChange={handleStepMonth_2}
              variant="bordered"
              label="Months 1st sprint"
              className="w-[187px] mb-3"
              radius="lg"
              size="sm"
            >
              {["1", "2", "3", "4", "5", "6"].map((option) => (
                <SelectItem
                  key={option}
                  value={option}
                  className="item"
                >
                  {option}
                </SelectItem>
              ))}
            </Select>
          </div>

          <div>
            <Select
              onChange={handleStepMonth_3}
              variant="bordered"
              label="Months 2nd sprint"
              className="w-[187px] mb-3"
              radius="lg"
              size="sm"
            >
              {["1", "2", "3", "4", "5", "6"].map((option) => (
                <SelectItem
                  key={option}
                  value={option}
                  className="item"
                >
                  {option}
                </SelectItem>
              ))}
            </Select>
          </div>

          <div>
            <Select
              onChange={handleStepMonth_4}
              variant="bordered"
              label="Months last force"
              className="w-[187px] mb-3"
              radius="lg"
              size="sm"
            >
              {["1", "2", "3", "4", "5", "6"].map((option) => (
                <SelectItem
                  key={option}
                  value={option}
                  className="item"
                >
                  {option}
                </SelectItem>
              ))}
            </Select>
          </div>
        </>
      )}
      {amountSteps === "5" && (
        <>
          <div>
            <Select
              onChange={handleStepMonth_1}
              variant="bordered"
              label="Months Seed"
              className="w-[187px] text-[#1d9fab] mb-3"
              radius="lg"
              size="sm"
            >
              {["1", "2", "3"].map((option) => (
                <SelectItem
                  key={option}
                  value={option}
                  className="item"
                >
                  {option}
                </SelectItem>
              ))}
            </Select>
          </div>
          <div>
            <Select
              onChange={handleStepMonth_2}
              variant="bordered"
              label="Months 1st sprint"
              className="w-[187px] mb-3"
              radius="lg"
              size="sm"
            >
              {["1", "2", "3", "4", "5", "6"].map((option) => (
                <SelectItem
                  key={option}
                  value={option}
                  className="item"
                >
                  {option}
                </SelectItem>
              ))}
            </Select>
          </div>
          <div>
            <Select
              onChange={handleStepMonth_3}
              variant="bordered"
              label="Months 2nd sprint"
              className="w-[187px] mb-3"
              radius="lg"
              size="sm"
            >
              {["1", "2", "3", "4", "5", "6"].map((option) => (
                <SelectItem
                  key={option}
                  value={option}
                  className="item"
                >
                  {option}
                </SelectItem>
              ))}
            </Select>
          </div>
          <div>
            <Select
              onChange={handleStepMonth_4}
              variant="bordered"
              label="Months 3rd sprint"
              className="w-[187px] mb-3"
              radius="lg"
              size="sm"
            >
              {["1", "2", "3", "4", "5", "6"].map((option) => (
                <SelectItem
                  key={option}
                  value={option}
                  className="item"
                >
                  {option}
                </SelectItem>
              ))}
            </Select>
          </div>
          <div>
            <Select
              onChange={handleStepMonth_5}
              variant="bordered"
              label="Months last force"
              className="w-[187px] mb-3"
              radius="lg"
              size="sm"
            >
              {["1", "2", "3", "4", "5", "6"].map((option) => (
                <SelectItem
                  key={option}
                  value={option}
                  className="item"
                >
                  {option}
                </SelectItem>
              ))}
            </Select>
          </div>
        </>
      )}
      {amountSteps === "6" && (
        <>
          <div>
            <Select
              onChange={handleStepMonth_1}
              variant="bordered"
              label="Months Seed"
              className="w-[187px] text-[#1d9fab] mb-3"
              radius="lg"
              size="sm"
            >
              {["1", "2", "3"].map((option) => (
                <SelectItem
                  key={option}
                  value={option}
                  className="item"
                >
                  {option}
                </SelectItem>
              ))}
            </Select>
          </div>
          <div>
            <Select
              onChange={handleStepMonth_2}
              variant="bordered"
              label="Months 1st sprint"
              className="w-[187px] mb-3"
              radius="lg"
              size="sm"
            >
              {["1", "2", "3", "4", "5", "6"].map((option) => (
                <SelectItem
                  key={option}
                  value={option}
                  className="item"
                >
                  {option}
                </SelectItem>
              ))}
            </Select>
          </div>
          <div>
            <Select
              onChange={handleStepMonth_3}
              variant="bordered"
              label="Months 2nd sprint"
              className="w-[187px] mb-3"
              radius="lg"
              size="sm"
            >
              {["1", "2", "3", "4", "5", "6"].map((option) => (
                <SelectItem
                  key={option}
                  value={option}
                  className="item"
                >
                  {option}
                </SelectItem>
              ))}
            </Select>
          </div>
          <div>
            <Select
              onChange={handleStepMonth_4}
              variant="bordered"
              label="Months 3rd sprint"
              className="w-[187px] mb-3"
              radius="lg"
              size="sm"
            >
              {["1", "2", "3", "4", "5", "6"].map((option) => (
                <SelectItem
                  key={option}
                  value={option}
                  className="item"
                >
                  {option}
                </SelectItem>
              ))}
            </Select>
          </div>
          <div>
            <Select
              onChange={handleStepMonth_5}
              variant="bordered"
              label="Months 4th sprint"
              className="w-[187px] mb-3"
              radius="lg"
              size="sm"
            >
              {["1", "2", "3", "4", "5", "6"].map((option) => (
                <SelectItem
                  key={option}
                  value={option}
                  className="item"
                >
                  {option}
                </SelectItem>
              ))}
            </Select>
          </div>
          <div>
            <Select
              onChange={handleStepMonth_6}
              variant="bordered"
              label="Months last force"
              className="w-[187px] mb-3"
              radius="lg"
              size="sm"
            >
              {["1", "2", "3", "4", "5", "6"].map((option) => (
                <SelectItem
                  key={option}
                  value={option}
                  className="item"
                >
                  {option}
                </SelectItem>
              ))}
            </Select>
          </div>
        </>
      )}
    </>
  );
}
